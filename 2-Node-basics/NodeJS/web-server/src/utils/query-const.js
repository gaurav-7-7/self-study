const CREATE_CERTIFICATION = 'Insert into certification values (?, ?, ?, ?, ?, ?, ?, ?);';
const GET_CERTIFICATION = 'SELECT * FROM certification';
const GET_STATUS = 'select status from certification where certification_code = ?'
const GET_USER_BY_ID = 'SELECT * FROM users WHERE id = ?';
const UPDATE_CERTIFICATION = 'UPDATE certification SET certification_code = ?, certification_name = ?, issuer = ?, overview = ?, start_date = ?, duration = ?, end_date = ?, status = ? WHERE certification_code = ?';
const PATCH_USER = 'UPDATE users SET ?? = ? WHERE id = ?';
const DELETE_USER = 'DELETE FROM users WHERE id = ?';

module.exports = {
    CREATE_CERTIFICATION,
    GET_CERTIFICATION,
    GET_STATUS,
    GET_USER_BY_ID,
    PATCH_USER,
    DELETE_USER,
    UPDATE_CERTIFICATION
};