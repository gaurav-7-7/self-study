const moment = require('moment');

const validateDateTime = (date) => {
    const isValid = moment(date, 'YYYY-MM-DD', true).isValid()
    return isValid
}

module.exports = {
    validateDateTime
}