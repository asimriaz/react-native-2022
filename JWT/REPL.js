const db = require('./models');


db.UserDetail.find().then(ud => {
    console.log(ud);
    process.exit();
});