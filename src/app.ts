import express from "express";
import morgan from "morgan";
import todoRoute from "routes/todoRoute";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use("/api/v1/todo", todoRoute);

app.get("/", (req, res) => {
	res.send("<h1>Hello World</h1>");
});

app.all("*", (req, res) => {
	res.status(404).json({
		status: "fail",
		message: "This Route is not defined please refer api docs",
	});
});

export default app;
