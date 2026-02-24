exports.singin = async () => {
    try {
        res.status(200).json({ message: "login success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to login" })

    }
}

exports.registerEmployee = async () => {
    try {
        res.status(200).json({ message: "register employee success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to register employee" })

    }
}

exports.singout = async () => {
    try {
        res.status(200).json({ message: "singout success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to singot employee" })

    }
}

exports.sendOTP = async () => {
    try {
        res.status(200).json({ message: "sendOTP success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to verifyOTP" })

    }
}

exports.verifyOTP = async () => {
    try {
        res.status(200).json({ message: "sendOTP success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to verifyOTP" })

    }
}
exports.forgetPassword = async () => {
    try {
        res.status(200).json({ message: "forgetPassword success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to forgetPassword" })

    }
}
exports.changePassword = async () => {
    try {
        res.status(200).json({ message: "changePassword success" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "unable to changePassword" })

    }
}