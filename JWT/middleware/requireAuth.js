const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: "You must be logged In" });
    }

    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, "I4049TI7EP", async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: "You must be logged In" });
        }

        const { userid } = payload;
        const user = await User.findById(userid);
        req.user = user;
        next();
    });
};
