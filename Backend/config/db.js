const mongoose = require("mongoose");

async function connectDB() {
    try {
        // await mongoose.connect(`${process.env.MONGODB_URI}`,{
        //     socketTimeoutMS: 2000
        await mongoose.connect(process.env.MONGODB_URI)

        // });
    } 
    catch (err) {
        console.error(err);
    }
}

module.exports = connectDB
