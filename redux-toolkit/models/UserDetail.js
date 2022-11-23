
const userScheme = Schema({
	name: {
		title: { type: String },
		first: { type: String },
		last: { type: String },
	},
	email: { type: String },
	dob: {
		date: { type: Date },
		age: { type: Number },
	},
	image: { type: String },
	nat: { type: String },
});
