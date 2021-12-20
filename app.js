const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());

app.use('/', indexRouter);

app.listen(8000, () => console.log("Server listening at PORT 8000"))

module.exports = app;
