const express = require('express');
const app = express();
const userController = require('./controller');
require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Create User
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    userController.createUser(name, email, (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error creating user' });
        }
        res.status(201).json({ message: 'User created successfully', id: results.insertId });
    });
});

// Get All Users
app.get('/users', (req, res) => {
    userController.getAllUsers((error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error fetching users' });
        }
        res.status(200).json(results);
    });
});

// Get User by ID
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    userController.getUserById(userId, (error, user) => {
        if (error) {
            if (error.message === 'User not found') {
                return res.status(404).json({ message: error.message });
            }
            console.error(error);
            return res.status(500).json({ message: 'Error fetching user' });
        }
        res.status(200).json(user);
    });
});

// Update User
app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    userController.updateUser(userId, name, email, (error, results) => {
        if (error) {
            if (error.message === 'User not found') {
                return res.status(404).json({ message: error.message });
            }
            console.error(error);
            return res.status(500).json({ message: 'Error updating user' });
        }
        res.status(200).json({ message: 'User updated successfully' });
    });
});

app.patch('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updates = req.body;

    userController.patchUser(userId, updates, (error, results) => {
        if (error) {
            if (error.message === 'User not found') {
                return res.status(404).json({ message: error.message });
            }
            console.error(error);
            return res.status(500).json({ message: 'Error updating user' });
        }
        res.status(200).json({ message: 'User updated successfully' });
    });
});

// Delete User
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    userController.deleteUser(userId, (error, results) => {
        if (error) {
            if (error.message === 'User not found') {
                return res.status(404).json({ message: error.message });
            }
            console.error(error);
            return res.status(500).json({ message: 'Error deleting user' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
