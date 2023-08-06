import bcrypt from "bcrypt";

const Users = [
	{
		name: "Adele",
		email: "a@gmail.com",
		password: await bcrypt.hash("123456", 10),
		isAdmin: true,
	},
	{
		name: "Ron",
		email: "r@gmail.com",
		password: await bcrypt.hash("123456", 10),
		isAdmin: false,
	},
	{
		name: "Messi",
		email: "m@gmail.com",
		password: await bcrypt.hash("123456", 10),
		isAdmin: true,
	},
	{
		name: "Ko",
		email: "k@gmail.com",
		password: await bcrypt.hash("123456", 10),
		isAdmin: false,
	},
];

export default Users;
