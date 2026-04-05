const dotenv = require("dotenv");
dotenv.config();

console.log("ENV CHECK:", process.env.MONGODB_URI);



const app = require("./src/app");

const connectDB = require("./src/db/db");





const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();   // ✅ WAIT here

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.log(err);
    }
};

startServer();