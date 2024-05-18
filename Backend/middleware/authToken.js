
const jwt = require('jsonwebtoken');
async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token || req.header
console.log('user id',req.user.id)
         if (!token) {
            return res.status(200).json({
                message: "UserNotlogin",
                error: true,
                success: false
            })
        }
  
        jwt.verify(token, 'TOKEN_SECRET_KEY', function (err, decoded) {
            console.log(err) // bar
            console.log("decoded", decoded);

            if (err) {
                console.log("error auth", err)
            }
            req.user.Id = decoded?._id
            next()
        });

        console.log("token", token)
    }
    catch(err) {
        res.status(400).json({
            message: err.mressage || err,
            error: true,
            data: [],
            success: false
        })
    }
}

module.exports = authToken;