const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    name: { type: String, required: true },
    creationDate: {type: Date, required: true, default: Date.now },
    images: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Image' }]
})

module.exports = mongoose.model('Tag', tagSchema)