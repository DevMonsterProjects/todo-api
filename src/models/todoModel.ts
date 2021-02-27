import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Todo title is required"],
		trim: true,
	},
	isCompleted: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
