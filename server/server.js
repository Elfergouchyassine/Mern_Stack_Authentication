const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const uploadRoutes = require('./routes/uploadRoutes');
const express = require('express');
const e = require('express');
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();


//db
async function connectDBAndStartServer() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected");

        // server runs only if db is connected
        const PORT = 8000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error("DB connection error:", err);
        process.exit(1); // Exit the process if the DB connection fails
    }
}

connectDBAndStartServer();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/uploads', express.static("uploads"));

//routes
app.use(userRoutes);
app.use(uploadRoutes);