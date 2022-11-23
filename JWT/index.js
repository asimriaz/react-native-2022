const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const jwt = require("jsonwebtoken");
const requireAuth = require("./middleware/requireAuth");

app.use(express.json());

const mongoUri = "mongodb+srv://dbUser:dbUser@cluster0.enbv6.mongodb.net/auth?retryWrites=true&w=majority";

if (!mongoUri) {
    throw new Error(`MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`);
}

mongoose.connect(mongoUri);

mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
    console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.post("/signup", async (req, res) => {
    const { email, password, fullname } = req.body;

    try {
        const user = new User({ email, password, fullname });
        let result = await user.save();
        //console.log(result);

        const token = jwt.sign({ userid: user._id }, "I4049TI7EP");

        res.send({ token });
    } catch (err) {
        res.status(422).send(err.message);
    }
});

app.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = jwt.sign({ userid: user._id }, "I4049TI7EP");
        res.send({ token, user });
    } catch (err) {
        return res.end(err.message);
    }
});

app.listen(3000, () => console.log(`Server is listening on http://localhost:3000`));
