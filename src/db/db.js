const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("Connecting to DB...");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;