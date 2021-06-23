const jwt = require("jsonwebtoken")
const config = require("../config.js")

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1] 

        const result = jwt.verify(token, config.secret)

    } catch (error) {
        console.log("Error: ", error)
        res.status(401).json({ message: "Access to information denied" })
    }
}

const onlyAdmin = (req, res, next) => {
    if (req.user && req.user.role === 1) {
        next()
    } else {
        res.status(403).json({ message: "Administrator" })
    }
}

module.exports = { verifyToken, onlyAdmin }