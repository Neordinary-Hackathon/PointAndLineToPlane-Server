const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const {sequelize} = require('./models');
const dotRoute = require('./api/routes/dot.route')
const lineRoute = require('./api/routes/line.route')
const flatRoute = require('./api/routes/flat.route')
dotenv.config();

const app = express();
const port = process.env.PORT

sequelize.sync({force:true})
    .then(() => {
        console.log('success connecting database');
    })
    .catch((err) => {
        console.log('fail connecting database > ',err);
    });

app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.json());

app.use('/dot', dotRoute);
app.use('/line', lineRoute);
app.use('/flat', flatRoute);


app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(err.status|| 500).send(err.message);
});

app.listen(port,()=>{
    console.log(`server on PORT ${port}`);
})

module.exports = app;