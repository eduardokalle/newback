/**
 * Main application routes  -- rutas de las aplicaciones
 */

// imports endpoint --  importacion de los puntos finales


const visit = require('./api/visit');

const user = require('./api/user');

const auth = require('./auth');

const campaign = require('./api/campaigns');


//Insert routes below -- insertar rutas a continuacion

module.exports = app => {


    app.use('/api/visit', visit);

    app.use('/api/campaigns', campaign);

    app.use('/api/users', user);

    app.use('/auth', auth);

    // Next routes  -- siguientes rutas
    // Endpoints in plural  --  puntos finales en plural
    // app.use('/api/users', user);


};
