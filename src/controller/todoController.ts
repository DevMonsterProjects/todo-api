import Todo from "models/todoModel";
import { RequestHandler } from "express";

export const getTodo: RequestHandler = async (req, res) => {
	try {
		const todos = await Todo.find();
		if (todos.length === 0)
			res
				.status(204)
				.json({ status: "success", message: "No Todos in database" });
		else
			res
				.status(200)
				.json({ status: "success", message: "Todos Found", data: { todos } });
	} catch (err) {
		res.status(500).json({
			status: "fail",
			message: "Some Error Occured please reffer the error",
			err,
		});
	}
};

export const addTodo: RequestHandler = async (req, res) => {
	try {
		const newTodo = await Todo.create(req.body);

		res.status(201).json({
			status: "success",
			message: "Todo Created",
			data: {
				todo: newTodo,
			},
		});
	} catch (err) {
		res.status(500).json({
			status: "fail",
			message: "Some Error Occured please reffer the error",
			err,
		});
	}
};

export const updateTodo: RequestHandler = async (req, res) => {
	try {
		if (req.body.isCompleted === undefined)
			res
				.status(400)
				.json({ status: "fail", message: "Request Body is not acceptable!" });
		else {
			const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
				isCompleted: req.body.isCompleted,
			});
			res.status(200).json({
				status: "success",
				message: "Todo Updated",
				data: { todo: updatedTodo },
			});
		}
	} catch (err) {
		res.status(500).json({
			status: "fail",
			message: "Some Error Occured please reffer the error",
			err,
		});
	}
};

export const deleteTodo: RequestHandler = async (req, res) => {
	try {
		const todo = await Todo.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status: "success",
			message: "Todo is deleted",
			data: {
				todo,
			},
		});
	} catch (err) {
		res.status(500).json({
			status: "fail",
			message: "Some Error Occured please reffer the error",
			err,
		});
	}
};
