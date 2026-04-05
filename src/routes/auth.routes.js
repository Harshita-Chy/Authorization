const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

/* Post  /api/auth/register */
router.post("/register", authController.registerUser);


router.get("/test", (req, res) => {
    console.log("Cookies: ", req.cookies);
    res.json({
        message: "Test route hit",
        cookies: req.cookies
    });
});

module.exports = router;