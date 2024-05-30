async function allusers(req,res){
    try{
        console.log("userId",req.userId)
    }
    catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = allusers;