const express = require('express');
require('express-async-errors');
const { rateLimit } = require('express-rate-limit');
const app = express();
const helmet = require('helmet');
const xxsClean = require('xss-clean');
const {
  requestLogger,
  errorHandler,
  unknownEndpoint,
} = require('./middleware/middleware');

const userRouter = require('./routes/user'); // user router
const blogRouter = require('./routes/blog'); // blogs router

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false,
});
// Middlewares
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.static('dist')); // Middleware to serve static files
app.use(helmet()); // Helmet middleware to set security headers
app.use(limiter); // Rate limiter middleware to limit requests
app.use(xxsClean()); // Middleware to sanitize user input from XSS attacks

// Routes
app.use(requestLogger); // Logging middleware
app.use('/api/v1/users', userRouter);
app.use('/api/v1/blogs', blogRouter); // Use blog routes

app.use(unknownEndpoint); // unknown endpoint
app.use(errorHandler); // error middleware handler

module.exports = app;
