const asyncHandler = require('express-async-handler');
const Todo = require('../models/todoModel');

// ADD Todo
const addTodo = asyncHandler(async (req, res, next) => {
    const { title, description } = req.body;
    const users = req.user._id;
    const addData = {
        title,
        description,
        users
    }
    const data = await Todo.create(addData);

    res.status(201).json({
        status: 'success',
        data: {
            data
        }
    });
});

//Delete Todo
const deleteTodo = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
        return next(new Error('No Todo available with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            deletedTodo
        }
    });
});

// Update Todo
const updateTodo = asyncHandler(async (req, res, next) => {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });

    if (!updatedTodo) {
        return next(new Error('No Todo available with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            updatedTodo
        }
    });
});

//Get All Todos
const getAllTodos = asyncHandler(async (req, res, next) => {
    const todosList = await Todo.find({ users: req.user._id });

    if (!todosList) {
        return next(new Error('Todos list is empty', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            todosList
        }
    });
});

module.exports = {
    addTodo,
    deleteTodo,
    updateTodo,
    getAllTodos

}