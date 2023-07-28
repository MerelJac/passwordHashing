const express = require('express');
// const routes = require('routes');
const sequelize = require('./connection/connections');

const app = express();
const PORT = 3001;

//middleware
app.use(express.json());
app.use(express.static('public'));
// to allow processing of json body
app.use(express.urlencoded({ extended: true}));
//activate routes
// app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, (res, req) => {
        console.log(`Listening on http://localhost:${PORT}`)})});
