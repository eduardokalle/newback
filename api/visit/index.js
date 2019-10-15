/***
 * Rutas visit
 *
 */

const { Router } = require('express');

const controller = require('./visit.controller');

const router = new Router();



router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.create);

router.delete('/:id', controller.remove);

router.put('/:id', controller.update);

module.exports = router;
