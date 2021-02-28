import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Todo title is required"],
			trim: true,
		},
		isCompleted: { type: Boolean, default: false },
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

todoSchema.virtual("id").get(function (this: { _id: string }) {
	return this._id;
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
