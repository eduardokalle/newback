/**
 * Auth configuration    --- configuracion de autenticacion
 *
 */

const express = require('express');

const User = require('../api/user/user.model');
const authLocal = require('./local/passport');
const configPassportLocal = require('./local');

// Passport Configuration  -- configuracion passport
authLocal.setup(User);

const router = express.Router();

router.use('/local', configPassportLocal);

module.exports = router;