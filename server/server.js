import express from "express";
import dotenv from "dotenv";
import { productData } from "./data/ProductsData.js";
import cors from "cors";
import { connect } from "./config/connectDB.js";
import router from "./routes/productRouter.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
const app = express();
dotenv.config();
connect();

const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
	res.json({
		message: "Hello",
	});
});

app.use("/api/products", router);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
