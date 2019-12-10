const express = require('express');
const app = express();

const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

const notFound = require('./middleware/not-found');
app.use(notFound);

module.exports = app;