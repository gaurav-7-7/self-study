const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const { mongoose } = require('./db/mongoose')
const jwt = require('jsonwebtoken')

// Load in the mongoose models
const { List, Task, User } = require('./db/models');

// Load middleware
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

// check whether a req has valid JWT token
let authenticate = (req, res, next) => {
    let token = req.header('x-access-token');
    jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
        if(err) {
            res.status(401).send(err);
        } else {
            req.user_id = decoded._id;
            next();
        }
    })
}

let verifySession = (req, res, next) => {
    // grab the refresh token from the request header
    let refreshToken = req.header('x-refresh-token');

    // grab the _id from the request header
    let _id = req.header('_id');

    User.findByIdAndToken(_id, refreshToken).then((user) => {
        if (!user) {
            // user couldn't be found
            return Promise.reject({
                'error': 'User not found. Make sure that the refresh token and user id are correct'
            });
        }
        // if the code reaches here - the user was found
        // therefore the refresh token exists in the database - but we still have to check if it has expired or not
        req.user_id = user._id;

        req.userObject = user;
        req.refreshToken = refreshToken;

        let isSessionValid = false;

        user.sessions.forEach((session) => {
            if (session.token === refreshToken) {
                // check if the session has expired
                if (User.hasRefreshTokenExpired(session.expiresAt) === false) {
                    // refresh token has not expired
                    isSessionValid = true;
                }
            }
        });

        if (isSessionValid) {
            // the session is VALID - call next() to continue with processing this web request
            next();
        } else {
            // the session is not valid
            return Promise.reject({
                'error': 'Refresh token has expired or the session is invalid'
            })
        }

    }).catch((e) => {
        res.status(401).send(e);
    })
}


// Routes handelers

// List Routes

// Get Lists
app.get('/lists', authenticate, (req, res) => {
    List.find({
        _userId: req.user_id

    }).then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    })
})
// Post Lists
app.post('/lists', authenticate, (req, res) => {
    let title = req.body.title;

    let newList = new List({
        title,
        _userId: req.user_id
    })
    newList.save().then((listDoc) => {
        res.send(listDoc);
    })
});
// Updating the list
app.patch('/lists/:id', authenticate, (req, res) => {
    List.findOneAndUpdate({ _id: req.params.id, _userId: req.user_id }, {
        $set: req.body
    }).then(() => {
        //res.sendStatus(200);
        res.send({'message': 'updated successfully'});
    });
});
// Deleting the list
app.delete('/lists/:id', authenticate, (req, res) => {
    List.findOneAndRemove({
        _id: req.params.id,
        _userId: req.user_id
    }).then((removeListDoc) => {
        res.send(removeListDoc);
        // delete all the task 
        deleteTasksFromList(removeListDoc);
    })
})

// Get tasks inside a list
app.get('/lists/:listId/tasks', authenticate, (req, res) => {
    Task.find({
        _listId: req.params.listId
    }).then((tasks) => {
        res.send(tasks);
    })
})

// app.get('/lists/:listId/tasks/:taskId', (req, res) => {
//     Task.findOne({
//         _id: req.params.taskId,
//         _listId: req.params.listId
//     }).then((task) => {
//         res.send(task);
//     })
// })

// Create new task inside a list
app.post('/lists/:listId/tasks', authenticate, (req, res) => {

    List.findOne({
        _id: req.params.listId,
        _userId: req.user_id
    }).then((list) => {
        if(list) return true;
        else return false
    }).then((canCreateTask) => {
        if (canCreateTask) {
            let newTask = new Task({
                title: req.body.title,
                _listId: req.params.listId
            });
            newTask.save().then((newTaskDoc) => {
                res.send(newTaskDoc);
            })
        } else {
            res.sendStatus(404);
        }
    })
})

// Update task inside list
app.patch('/lists/:listId/tasks/:taskId', authenticate, (req, res) => {
    List.findOne({
        _id: req.params.listId,
        _userId: req.user_id
    }).then((list) => {
        if (list) return true;
        return false;
    }).then((canUpdateTasks) => {
        if (canUpdateTasks) {
            Task.findOneAndUpdate({
                _id: req.params.taskId,
                _listId: req.params.listId
            }, {
                    $set: req.body
                }
            ).then(() => {
                res.send({ message: 'Updated successfully.' })
            })
        } else {
            res.sendStatus(404);
        }
    })
})

// Deleting a task inside a list
app.delete('/lists/:listId/tasks/:taskId', authenticate, (req, res) => {
    List.findOne({
        _id: req.params.listId,
        _userId: req.user_id
    }).then((list) => {
        if (list) return true;
        return false;
    }).then((canDeleteTasks) => {
        if (canDeleteTasks) {
            Task.findOneAndRemove({
                _id: req.params.taskId,
                _listId: req.params.listId
            }).then((removeTaskDoc) => {
                res.send(removeTaskDoc)
            })
        } else {
            res.sendStatus(404);
        }
    });
})

// User routes

// signup
app.post('/users', (req, res) => {
    let body = req.body;
    let newUser = new User(body);

    newUser.save().then(() => {
        return newUser.createSession();
    }).then((refreshToken) => {
        return newUser.generateRefreshAuthToken().then((accessToken) => {
            return {accessToken, refreshToken}
        })
    }).then((authTokens) => {
        res
            .header('x-refresh-token', authTokens.refreshToken)
            .header('x-access-token', authTokens.accessToken)
            .send(newUser);
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// Login
app.post('/users/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findByCredentials(email, password).then((user) => {
        return user.createSession().then((refreshToken) => {
            return user.generateAccessAuthToken().then((accessToken) => {
                return { accessToken, refreshToken }
            });
        }).then((authTokens) => {
            res
                .header('x-refresh-token', authTokens.refreshToken)
                .header('x-access-token', authTokens.accessToken)
                .send(user);
        })
    }).catch((e) => {
        res.status(400).send(e);
    });
})

// generates and returns an access token
app.get('/users/me/access-token', verifySession, (req, res) => {
    // we know that the user/caller is authenticated and we have the user_id and user object available to us
    req.userObject.generateAccessAuthToken().then((accessToken) => {
        res.header('x-access-token', accessToken).send({ accessToken });
    }).catch((e) => {
        res.status(400).send(e);
    });
})

let deleteTasksFromList = (_listId) => {
    Task.deleteMany({
        _listId
    }).then(() => {
        console.log("Tasks from " + _listId + " were deleted!")
    });
}

app.listen(3000, () => {
    console.log("Server is listening to port 3000");
})