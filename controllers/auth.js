class AuthController {
    static cekLogin(req, res) {
        const username = req.body.username
        const password = req.body.password

        User
            .findOne({
                where: {
                    username,
                    password
                }
            })
            .then(data => {

            })
    }
}
module.exports = AuthController