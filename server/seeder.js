import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import Users from "./data/users.js";
import { productData } from "./data/ProductsData.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import { connect } from "./config/connectDB.js";

dotenv.config();
connect();

const importData = async () => {
	try {
		await User.deleteMany({});
		await Product.deleteMany({});
		await Order.deleteMany({});

		const createdUsers = await User.insertMany(Users);
		const adminUser = createdUsers[0]._id;
		const sampleProduct = productData.map((pr) => {
			return { ...pr, user: adminUser };
		});

		await Product.insertMany(sampleProduct);
		console.log(`Data Import Done`.bgGreen);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red);
		process.exit(1);
	}
};

const DataDestroy = async () => {
	try {
		await User.deleteMany();
		console.log("All users deleted".bgYellow);
		await Product.deleteMany();
		console.log("All products deleted".bgRed);
		await Order.deleteMany();
		console.log("All orders deleted".bgBlue);
		process.exit();
	} catch (error) {
		console.log(`${error}`.bgGreen);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	DataDestroy();
} else {
	importData();
}
