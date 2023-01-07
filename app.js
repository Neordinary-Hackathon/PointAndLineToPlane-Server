const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const {sequelize} = require('./models');

dotenv.config();

const app = express();
const port = process.env.PORT


app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.json());

//app.use('/users', usersRouter);


app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(err.status|| 500).send(err.message);
});

app.listen(port,()=>{
    console.log(`server on PORT ${port}`);
})

module.exports = app;