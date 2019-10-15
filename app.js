/**
 * Main application file   --  archivos principales del aplciativo
 */

const express = require('express'); //requerimos las dependencias solicitadas,
const http = require('http');
const mongoose = require('mongoose');

const expressConfig = require('./config/express'); // const that you require express configuration

const routeConfig = require('./routes');

const config = require('./config/environment');

//Connect to mongoDB  -- conexion a mongo db

mongoose.connect(config.mongo.uri, { useNewUrlParser: true }).then(() =>
    console.log('Atlass connect ')
);
mongoose.connection.on('error', (err) => {
    console.error('Error', 'MongoDB connection error', {
        data: err,
        time: new Date().toISOString(),
    });
    process.exit(-1);
});

// Setup server
const app = express();
const server = http.createServer(app);

expressConfig(app);
routeConfig(app);


// Start server
function startServer() {
    app.shoppingCartBK = server.listen(config.port, config.ip, () => {
        console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`);
    });
}

setImmediate(startServer);

// Expose app
module.exports = app;