const CREATE_USER = 'INSERT INTO users (name, email) VALUES (?, ?)';
const GET_ALL_USERS = 'SELECT name FROM users';
const GET_USER_BY_ID = 'SELECT * FROM users WHERE id = ?';
const UPDATE_USER = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
const PATCH_USER = 'UPDATE users SET ?? = ? WHERE id = ?';
const DELETE_USER = 'DELETE FROM users WHERE id = ?';

module.exports = {
    CREATE_USER,
    GET_ALL_USERS,
    GET_USER_BY_ID,
    UPDATE_USER,
    PATCH_USER,
    DELETE_USER,
};