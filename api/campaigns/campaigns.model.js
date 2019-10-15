/**
 * campaigns model ---  modelo de campaña
 *
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;

const CampaignSchema = new Schema({

    campaignName: { type: String, uppercase: true, required: true },
    expositorName: { type: String, uppercase: true, required: true },
    description: { type: String, required: true },

}, { timestamps: true });


module.exports = mongoose.model('campaigns', CampaignSchema);
