import mongoose from "mongoose";

export const connect = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`Mongo connected to: ${conn.connection.host}`);
	} catch (error) {
		console.log({
			message: "Mongoose connection error",
			error: error.message,
		});
	}
};
