const express = require('express');
const path = require('path');

const app = express();

//Port setup
const port = process.env.PORT || 3333;

//Set up index as router on root
app.use('/', require("./controllers/index"));

//Pass error to error handler for rendering 404.
app.use((req, res, next) => {
    let error = new Error("Not found");
    error.status = 404;
    next(error);
});

//Error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    //Render error page based on passed status
    res.status(err.status || 500);
});

//Start server
app.listen(port, () => {
    console.log('Request header parser server is listening on port ' + port);
});