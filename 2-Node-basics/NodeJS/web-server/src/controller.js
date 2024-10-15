const pool = require('./db');

// Create User Function
const createUser = (name, email, callback) => {
    pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error, results) => {
        if (error) return callback(error, null);
        return callback(null, results);
    });
};

// Get All Users Function
const getAllUsers = (callback) => {
    pool.query('SELECT name FROM users', (error, results) => {
        if (error) return callback(error, null);
        return callback(null, results);
    });
};

// Get User by ID Function
const getUserById = (userId, callback) => {
    pool.query('SELECT * FROM users WHERE id = ?', [userId], (error, results) => {
        if (error) return callback(error, null);
        if (results.length === 0) return callback(new Error('User not found'), null);
        return callback(null, results[0]);
    });
};

// Update User Function
const updateUser = (userId, name, email, callback) => {
    pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, userId], (error, results) => {
        if (error) return callback(error, null);
        if (results.affectedRows === 0) return callback(new Error('User not found'), null);
        return callback(null, results);
    });
};

const patchUser = (userId, updates, callback) => {
    const fields = Object.keys(updates);
    const values = Object.values(updates);

    if (fields.length === 0) {
        return callback(new Error('No fields to update'), null);
    }
    
    const setClause = fields.map((field) => `${field} = ?`).join(', ');
    const query = `UPDATE users SET ${setClause} WHERE id = ?`;
    values.push(userId); // Add userId to the values array for the WHERE clause

    pool.query(query, values, (error, results) => {
        if (error) return callback(error, null);
        if (results.affectedRows === 0) return callback(new Error('User not found'), null);
        return callback(null, results);
    });
};

// Delete User Function
const deleteUser = (userId, callback) => {
    pool.query('DELETE FROM users WHERE id = ?', [userId], (error, results) => {
        if (error) return callback(error, null);
        if (results.affectedRows === 0) return callback(new Error('User not found'), null);
        return callback(null, results);
    });
};

module.exports = {
    createUser, 
    deleteUser, 
    updateUser, 
    getAllUsers, 
    getUserById, 
    deleteUser
}