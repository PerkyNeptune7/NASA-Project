const http = require('http');
require('dotenv').config();
const app = require('./app');

const {mongoConnect} = require('./services/mongo');
const { loadLaunchesData } = require('./models/launches.model');

const {loadPlanetsData} = require('./models/planet.model');
const server = http.createServer(app);

const PORT = process.env.PORT || 8001;


async function startServer(){
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchesData();

server.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}...`);
});
}

startServer();