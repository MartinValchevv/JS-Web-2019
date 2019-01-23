const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    creationDate: {type: Date, required: true, default: Date.now },
    title: { type: String },
    description: { type: String },
    tags: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Tag' }]
})

module.exports = mongoose.model('Image', imageSchema)