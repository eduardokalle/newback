/**
 * Using Rails-like standard naming convention for endpoints.  --
 * GET     /api/campaigns           ->  index
 * GET     /api/campaigns/:id       ->  show
 * POST    /api/campaigns           ->  create
 *
 * Uso de la convención de nomenclatura estándar similar a Rails para puntos finales. -
 * GET / api / campaigns -> index --  indice
 * GET / api / campaigns /: id -> show --  mostar
 * POST / api / campaigns -> create -- crear
 *
 */

const Campaigns = require('./campaigns.model');


//funciones que no ayudan a la legibilidad al responder a las promesas

function respondWithResult(res, code) {
    const statusCode = code || 200;
    return (entity) => {
        if (entity) {
            res.status(statusCode).json(entity);
        }
    };
}

function handleEntityNotFound(res) {
    return (entity) => {
        if (!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    };
}

function hadleError(res, code) {

    const statusCode = code || 500;
    return (err) => {
        res.status(statusCode).send(err);
    };
}


//Gets a list Campaigns  --  muestra la lista Campaigns
function index(req, res) {
    return Campaigns.find().exec()
        .then(respondWithResult(res))
        .catch(hadleError(res));
}

//Create Campaigns - -  crea Campaigns
function create(req, res) {
    return Campaigns.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(hadleError(res));

}

// Gets a single Campaigns from the DB --  muestra un solo Campaigns sobre la base de datos
function show(req, res) {
    return Campaigns.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(hadleError(res));
}

function remove(req, res) {
    return Campaigns.findByIdAndRemove(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(hadleError(res));
    console.log("remove");

}

function update(req, res) {

    return Campaigns.findByIdAndUpdate(req.params.id, req.body).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res.body("update")))
        .catch(hadleError(res));
    console.log("update");
}


module.exports = {
    index,
    create,
    show,
    remove,
    update
};
