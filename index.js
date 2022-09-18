const express = require('express');
const app = express();

const apiRoutes = require('./router/app.router');
const loggerMiddleware = require('./middlewares/logger');



const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(loggerMiddleware);


app.use( '/api', apiRoutes );




const serverOn = app.listen(PORT, () => {
    console.log(`Server connected on port ${PORT}`)
});

serverOn.on('error', (error) => {
    console.log('error', (error))
});
