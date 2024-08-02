const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const path = require('path');
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

console.log('app.js loaded');
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));    

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/launches', launchesRouter);
app.use('/planets', planetsRouter);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html'))
});

module.exports = app;