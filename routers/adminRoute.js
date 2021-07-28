const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('dashboard/admin')
})
router.get('/product', (req, res) => {
    res.render('dashboard/product')
})
router.get('/purchase', (req, res) => {
    res.render('dashboard/purchases')
})

function cekLogin(req, res, next) {
    if (req.session.isLogin) {
        next()
    } else {
        res.redirect('/login')
    }
}
module.exports = router