import express from "express";
import {
	addTodo,
	deleteTodo,
	getTodo,
	updateTodo,
} from "controller/todoController";

const todoRoute = express.Router();

todoRoute.route("/").get(getTodo).post(addTodo);
todoRoute.route("/:id").patch(updateTodo).delete(deleteTodo);

export default todoRoute;
