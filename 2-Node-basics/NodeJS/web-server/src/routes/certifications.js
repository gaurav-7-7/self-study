const { Router } = require('express')
const router = Router()
const pool = require('../utils/db')
const { createCertification, getCertification } = require('../controllers/certificateController')
pool.query('show databases;')

router.post('/certificate', createCertification)

router.get('/certificate', getCertification)

module.exports = router
