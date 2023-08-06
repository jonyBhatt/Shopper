import express from "express";
import Product from "../models/productModel.js";
const router = express.Router();
router.get("/", async (req, res) => {
	const products = await Product.find();
	res.status(200).json({ message: "success", data: products });
});
export default router;
