/**
 * visit model ---  modelo de visitas
 *
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const VisitSchema = new Schema({

    name: { type: String, uppercase: true, required: true },
    lastName: { type: String, uppercase: true, required: true },
    cc: { type: Number, required: true },
    phone: { type: Number, required: true },
    old: { type: Number, required: true },
    city: { type: String, uppercase: true, required: true },
    address: { type: String, uppercase: true, required: true },
    description: { type: String, required: true },

}, { timestamps: true });

VisitSchema
    .path('old')
    .validate((old) => {

        if (old > 0) {
            return true;
        }
        return false;
    }, 'The old quantity must be greater than 0');

VisitSchema
    .path('cc')
    .validate((cc) => {

        if (cc >= 0) {
            return true;
        }
        return false;
    }, 'The cc cannot be a negative value');


module.exports = mongoose.model('visit', VisitSchema);
