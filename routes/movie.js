const controller = require('../controllers/movie'),
    Router = require('restify-router').Router,
    router = new Router();

router.get('/:title', controller.getmovie);
router.post('/new/:title', controller.createmovie);

module.exports = router;
