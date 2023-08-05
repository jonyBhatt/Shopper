import express from "express";
import dotenv from "dotenv";
import { productData } from "./ProductsData.js";
import cors from "cors";
import { connect } from "./config/connectDB.js";
const app = express();
dotenv.config();
connect();

const port = process.env.PORT || 4000;

app.use(cors());

app.get("/products", (req, res) => {
	try {
		res.status(200).json(productData);
	} catch (error) {
		res.status(404).json({
			message: "Not found products",
			error: error.message,
		});
	}
});

app.get("/products/:id", (req, res) => {
	try {
		const { id } = req.params;
		const product = productData.find((p) => p.id.toString() === id);
		res.status(200).json(product);
	} catch (error) {
		res.status(404).json({
			message: "Not found products",
			error: error.message,
		});
	}
});

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
