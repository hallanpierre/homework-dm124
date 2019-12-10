const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth')

router.post('/', checkAuth, (request, response) => {
    const createTask = {
        status: 201,
        message: 'Created successfully'
    };
    response
        .status(201)
        .json(createTask);
});

router.get('/', checkAuth, (request, response) => {
    const tasks = {
        status: 200,
        message: 'Get all tasks'
    };
    response
        .status(200)
        .json(tasks);
});

router.get('/:taskId', checkAuth, (request, response) => {
    const task = {
        status: 200,
        message: 'Get task' + request.params.taskId
    };
    response
        .status(200)
        .json(task);
});

router.patch('/:taskId', checkAuth, (request, response) => {
    const updateTask = {
        status: 200,
        message: 'Update task' + request.params.taskId
    };
    response
        .status(200)
        .json(updateTask);
});

router.delete('/:taskId', checkAuth, (request, response) => {
    const deleteTask = {
        status: 200,
        message: 'Delete task' + request.params.taskId
    };
    response
        .status(200)
        .json(deleteTask);
});

module.exports = router;