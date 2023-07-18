const express = require('express');
const bodyParser = require('body-parser');


// local inport

const connectDb = require('./db.js');
const employeeRoute = require('./controllers/employee.controller')

const app = express();
app.use(bodyParser.json());
app.use('/api/employees', employeeRoute);


connectDb()
    .then( () => {
        console.log('Db connection sucessfull');
        app.listen(3000, () => console.log('server started at 3000'));
    })
    .catch(err => console.log(err))