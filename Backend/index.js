const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
require("dotenv").config()
const connectDB = require('./config/db')
const router = require('./routes')




const app = express();
app.use(cors(
    {
        origin : process.env.FRONTEND_URL,
        credentials : true,
    }
));

// app.use(cors({
//     origin: 'http://192.168.56.1:3000', // Replace with your client's origin
//     methods: ['GET', 'POST'], // Specify the allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
//     credentials: true // Allow sending cookies from the client
//   }));

app.use(express.json());
app.use("cookieParser",cookieParser());
app.use("/api", router);


const PORT =8080 || process.env.PORT;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running"+ PORT);
    });
});
