const express = require('express');
const router = express.Router();

const TaskService = require('../services/DeliveryService');
const checkAuth = require('../middleware/auth');
const notFound = require('../middleware/not-found');

const HttpStatusOk = 200;
const HttpStatusCreated = 201;
const HttpStatusNotContent = 204;

router.post('/', checkAuth, async (request, response) => {
    const createTask = await TaskService.add(request.body);
    response
        .status(HttpStatusCreated)
        .json(createTask);
});

router.get('/', checkAuth, async (request, response) => {
    const tasks = await TaskService.getAll();
    tasks 
        ? response.status(HttpStatusOk).json(tasks)
        : response.status(HttpStatusNotContent).end();
});

router.get('/:deliveryId', checkAuth, async (request, response) => {
    const task = await TaskService.getById(request.params.deliveryId);
    task
        ? response.json(task)
        : notFound(request, response);
});

router.patch('/:deliveryId', checkAuth, async (request, response) => {
    const updatedTask = await TaskService.update(
        request.params.deliveryId,
        request.body
      );
    updatedTask
        ? response.json(updatedTask)
        : notFound(request, response);
});

router.delete('/:deliveryId', checkAuth, async (request, response) => {
    const isDeleted = await TaskService.delete(request.params.deliveryId);
    isDeleted
        ? response.end()
        : notFound(request, response)
});

module.exports = router;