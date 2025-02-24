let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let funniestLyricsSchema = new Schema({
    song: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    lyrics: {
        type: String,
        required: true
    },
    addedBy: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('FunniestLyrics', funniestLyricsSchema);