const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const sequelize = require('./shared/database');

const app = express();
app.use(bodyParser.json());
app.use(routes);

//sequelize.sync({ alter: true }).then(() => {
//    console.log('Database synchronized');
//});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
