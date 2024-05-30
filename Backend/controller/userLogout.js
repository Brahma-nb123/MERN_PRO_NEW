async function userLogout(req,res){
    try{
        res.clearCookie("token")


        res.json({
            message : "Logged out sussesfully",
            error : false,
            success : true,
            data: []
        })
    }
    catch(err){
        console.error("Error in user sign-in:", err);
        res.status(400).json({
            message: err.message || "An error occurred during sign-in",
            error: true,
            success: false
        });
    }
}

module.exports = userLogout;