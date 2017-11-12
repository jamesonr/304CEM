const movie = require('./../models/movie');

exports.getmovie = function(req, res) {
    movie.findOne({title: req.params["title"]}, function(err, movie) {
        if (err) return res.json(500, {"message" : "Mayday Mayday, something has went horribly wrong"});
        if (!movie) return res.json(404, {"message" : "Sorry, we couldn't find this movie!"});
        res.json(200, {"movie" : movie});
    })
}

exports.createmovie = function(req, res) {
    const newMovie = new movie({
      title : req.body.title,
      cast : req.body.cast,
      crew : req.body.crew
    });
    newMovie.save(function(err, createdMovie) {
        if (err) return res.json(500, {"message" : "Mayday Mayday, something has went horribly wrong"});
        res.json(201, {"movie" : createdMovie});
    }

)}
