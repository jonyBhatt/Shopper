const notFound = (req, res, next) => {
	const err = new Error(`Not found - ${req.originalUrl}`);
	res.status(404);
	next(err);
};

const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	let message = err.message;

	//* mongoose error

	if (err.name === "CastError" && err.kind === "ObjectId") {
		message = "Resource not found";
		statusCode = 404;
	}

	res.status(statusCode).json({
		success: false,
		message,
		stack: process.env.NODE_ENV === "production" ? "stack no" : err.stack,
	});
};


export {notFound, errorHandler}