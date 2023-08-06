import mongoose from "mongoose";

const ratingSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	rate: {
		type: Number,
		required: true,
		default: 0,
	},
	count: {
		type: Number,
		default: 1,
	},
	comment: {
		type: String,
	},
});

const productSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		title: {
			type: String,
			required: true,
		},
		image: String,
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		rating: [ratingSchema],
		price: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	},
);

const Product = mongoose.model("product", productSchema);
export default Product;
