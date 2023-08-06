import express from "express";
import Product from "../models/productModel.js";
const router = express.Router();
router.get("/", async (req, res) => {
	const products = await Product.find();
	res.status(200).json({ message: "success", data: products });
});
router.get("/products/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (product) {
			return res.status(200).json(product);
		} else {
			res.status(404);
			throw new Error("Product not Found");
		}
	} catch (error) {
		res.status(404);
		throw new Error(`${error.message}`);
	}
});
export default router;
