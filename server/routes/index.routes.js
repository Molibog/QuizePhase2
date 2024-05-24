const router = require('express').Router();
const questionApi = require('./api/question.api.routes');

router.use('/question', questionApi);

module.exports = router;
