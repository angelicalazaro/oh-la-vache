const cowsay = require("cowsay");
const dotenv = require("dotenv");
dotenv.configDotenv();

const name = process.env.MY_NAME;
const city = process.env.MY_CAMPUS;

console.log(
	cowsay.say({
		text: `I am ${name}, from ${city} campus.`,
	}),
);
