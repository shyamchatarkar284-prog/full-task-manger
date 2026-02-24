require("dotenv").config({ path: "./../.env" })
const mongoose = require("mongoose")
const User = require("../modules/User")
const bcrypt = require("bcrypt")
exports.seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db connect")
        const result = await User.findOne({ role: "admin" })
        if (result) {
            console.log("admin already present");
            process.exit(1)
        }
        const hash = await bcrypt.hash("123", 10)
        await User.create({
            name: "admin",
            email: "admin@gmail.com",
            password: hash,
            mobile: "9370207035",
            role: "admin"
        })
        console.log("admin seed complete")
        process.exit(1)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}