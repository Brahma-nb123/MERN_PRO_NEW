const userModel = require("../models/userModels");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please Provide valid Password");
        }

        // Check if the user exists in the database
        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // if (!isPasswordValid) {
        //     throw new Error("Incorrect password");
        // }

        if (isPasswordValid) {
            const tokenData = {
                _id: user._id,
                email: user.email,

            }
            // Generate JWT token for authentication
            const token = jwt.sign(
                tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

            res.cookie("token",token,tokenData).json({
                message: "login succesfully",
                data: token,
                success: true,
                error: false
            })
        }

        else {
            throw new Error("Please check Password.");
        }





        // Set token in HTTP-only cookie for secure storage
        res.cookie("token", token, { httpOnly: true, secure: true });

        // Respond with success message and token
        res.status(200).json({
            message: "Login successful",
            token: token,
            success: true,
            error: false
        });
    } catch (err) {
        // Handle errors
        console.error("Error in user sign-in:", err);
        res.status(400).json({
            message: err.message || "An error occurred during sign-in",
            error: true,
            success: false
        });
    }
}

module.exports = userSignInController;
