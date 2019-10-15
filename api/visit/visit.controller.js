/**
 * Using Rails-like standard naming convention for endpoints.  --
 * GET     /api/Visit           ->  index
 * GET     /api/Visit/:id       ->  show
 * POST    /api/Visit           ->  create
 *
 * Uso de la convención de nomenclatura estándar similar a Rails para puntos finales. -
 * GET / api / Visit -> index --  indice
 * GET / api / Visit /: id -> show --  mostar
 * POST / api / Visit -> create -- crear
 *
 */

const Visit = require('./visit.model');


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


//Gets a list Visit  --  muestra la lista Visit
function index(req, res) {
    return Visit.find().exec()
        .then(respondWithResult(res))
        .catch(hadleError(res));
}

//Create Visit - -  crea Visit
function create(req, res) {
    return Visit.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(hadleError(res));

}

// Gets a single Visit from the DB --  muestra un solo Visit sobre la base de datos
function show(req, res) {
    return Visit.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(hadleError(res));
}

function remove(req, res) {
    return Visit.findByIdAndRemove(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(hadleError(res));
    console.log("remove");

}

function update(req, res) {

    return Visit.findByIdAndUpdate(req.params.id, req.body).exec()
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
