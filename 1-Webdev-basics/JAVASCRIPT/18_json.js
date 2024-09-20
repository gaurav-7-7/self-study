// server exchanges data in JSON format which is a string format
const stu = `
[
    {
        "name" : "gaurav",
        "desc" : "student",
        "ctc" : 120,
        "major" : {
            "min" : 2,
            "max" : 5
        }
    },
    {
        "name" : "yukti",
        "desc" : "student",
        "ctc" : 280,
        "major" : {
            "min" : 2,
            "max" : 5
        }
    }
]
`;

// to make changes we need to convert this json string into an array which will make our task easy

var users = JSON.parse(stu); //conversion
console.log(users);

var nUser = {
    name : "rohit",
    desc : "student",
    ctc : 180,
    major : {
        min : 2,
        max : 5
    } 
}
 
users.push(nUser); // adding new user
console.log(users);

var strUsers = JSON.stringify(users); // will stringify the new edited user back to JSON string
console.log(strUsers);