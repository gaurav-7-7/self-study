const pool = require('../utils/db');
const moment = require('moment')
const { validateDateTime } = require('./validation/validationService')
let {
    CREATE_CERTIFICATION,
    UPDATE_CERTIFICATION,
    GET_CERTIFICATION,
    GET_STATUS,
} = require('../utils/query-const')


/**
 * This API creates as well as updates the entries in certification table and action param is require in the url to tell if the certificate state
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
// Create certification
const createCertification = async (req, res) => {
    try {
        if(!req.query.action) {
            res.send({message: 'Action is requrie in query param'})
            return
        }
        const action = req.query.action === 'save' ? 'draft' : 'published'
        const { certification_code, certification_name, issuer, overview, start_date, duration } = req.body
        const end_date = moment(start_date).add(duration, 'M').format('YYYY-MM-DD');
        if(!certification_code && !certification_name && !issuer && !overview && !start_date && !duration) {
            res.send({message: 'Invalid Input'}, 422)
        }
        if(!validateDateTime(start_date)) {
            res.send({message: 'Invalid Date Format, expected format:(YYYY-MM-DD)'}, 422)
        }
        if(req.query.certification_code) {
            const certificateStatus = await pool.query(GET_STATUS, [req.query.certification_code])
            if(certificateStatus[0].status != 'draft') {
                res.send({message: 'You can only edit draft certificates'}, 422)
                return
            }
            await pool.query(UPDATE_CERTIFICATION, [certification_code, certification_name, issuer, overview, start_date, duration, end_date, action, req.query.certification_code])
        } else {
            await pool.query(CREATE_CERTIFICATION, [certification_code, certification_name, issuer, overview, start_date, duration, end_date, action])
        }
        res.send({message:'Certificate created successfully'}, )
    } catch (error) {
        console.log(error.message)
    }
};


const getCertification = async (req, res) => {
    try {
        let result, filterQuery
        if(req.query.status) {
            if(['draft','published'].includes(req.query.status)){
                filterQuery = GET_CERTIFICATION + ` where status = ?`
                result = await pool.query(filterQuery, [req.query.status])
            } else if(req.query.status === 'active') {
                filterQuery = GET_CERTIFICATION + ` where now() between start_date and end_date and status != 'draft';`
                result = await pool.query(filterQuery)
            } else if(req.query.status === 'expired') {
                filterQuery = GET_CERTIFICATION + ` where now() > end_date and status != 'draft';`
                result = await pool.query(filterQuery)
            }
        } else {
            result = await pool.query(GET_CERTIFICATION)
        }
        checkStatus(result)
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
};


const checkStatus = (items) => {
    const currentDate = moment().format('YYYY-MM-DD')
    items.forEach(item => {
        if(item.status === 'draft')
            return 
        if(moment(currentDate).isAfter(moment(item.end_date).format('YYYY-MM-DD'))) {
            item.status = 'expired'
        } else if((moment(currentDate).isAfter(moment(item.start_date).format('YYYY-MM-DD')))) {
            item.status = 'active'
        }
    });
}


module.exports = {
    createCertification,
    getCertification
}