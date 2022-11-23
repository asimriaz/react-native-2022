const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userDetailScheme = Schema({
	name: {
		title: { type: String },
		first: { type: String },
		last: { type: String },
	},
	email: { type: String },
	dob: {
		date: { 
            type: Date, 
            //get: v => new Date(v), 
        },
		age: { type: Number },
	},
	image: { type: String },
	nat: { type: String },
});
module.exports = model("UserDetail", userDetailScheme);
