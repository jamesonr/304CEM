const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const MovieSchema = new Schema ({
    movie_id: {type: Number, required: false},
    title : {type: String, required: true},
    cast : {type: String, required: false},
    crew : {type: String, required: false}
})

module.exports = mongoose.model("movie", MovieSchema);
