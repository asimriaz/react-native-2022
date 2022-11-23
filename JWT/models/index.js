
const mongoose = require('mongoose');

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

module.exports = {
    User: require('./User'), 
    UserDetail: require('./UserDetail')
};