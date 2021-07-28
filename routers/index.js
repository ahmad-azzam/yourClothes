const router = require('express').Router();
const adminRoute = require('./adminRoute');
const userRoute = require('./userRoute');
const authRoute = require('./authRoute');


router.get('/', (req, res) => {
    res.send('Hello')
})

router.use('/', authRoute)
router.use('/admin', adminRoute)
router.use('/user', userRoute)

module.exports = router