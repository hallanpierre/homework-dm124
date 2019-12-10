const express = require('express');
const app = express();

// Middlewares
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/not-found');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Routes
const taskRouter = require('./routes/tasks');
app.use('/tasks', taskRouter);

app.use(notFound);

module.exports = app;