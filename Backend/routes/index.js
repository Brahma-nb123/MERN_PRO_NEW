
const express = require('express');
const router = express.Router();
const userSignUpController = require("../controller/userSignUp")
const useSignInController = require("../controller/userSignin");
const userDetaiulsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');

// Define your routes here

router.post("/signup",userSignUpController);
router.post("/signin",useSignInController);
router.get("/user-details",authToken,userDetaiulsController)

// Export the router
module.exports = router;
