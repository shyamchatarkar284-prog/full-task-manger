const { singin, registerEmployee, singout, sendOTP, forgetPassword, changePassword, verifyOTP } = require("../controllers/admin.controller")

const router = require("express").Router()

router
.post("/singin", singin)
.post("/register-employee", registerEmployee)
.post("/singout", singout)
.post("/send-otp", sendOTP)
.post("/verify-otp", verifyOTP)
.post("/forget-password", forgetPassword)
.post("/change-password", changePassword)