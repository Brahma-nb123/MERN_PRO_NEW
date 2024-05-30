const userModel = require('../models/userModels');

async function userDetailsController(req, res) {
    try {
        console.log("userId", req.userId);

        const user = await userModel.findById(req.userId);

        if (!user) {
            throw new Error("User not found");
        }

        res.status(200).json({
            message: "User details fetched successfully",
            data: user,
            error: false,
            success: true
        });

        console.log("user", user);
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = userDetailsController;



