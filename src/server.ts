import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import mongoose from "mongoose";

let DB = process.env.DB! || "mongodb://localhost:27017/todoapp";

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to Database Server");
	});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
