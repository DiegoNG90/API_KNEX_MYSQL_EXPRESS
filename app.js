//Trabajando con @babel/node, podemos escribir código moderno como import en vez de require
const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');

//Importing routers!
const routes = require('./routes');

const app = express();

//Middlewares
app.use(logger('dev')); //Muestra las llamadas por consola
app.use(express.json()); //Transforma los datos a json

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hola!');
});
//Routes
// app.use('/api/tasks', taskRoutes);

module.exports = app;
