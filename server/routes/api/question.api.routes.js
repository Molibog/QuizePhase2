const app = require('../../app');
const router = require('express').Router();
const { Question } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const data = await Question.findAll();
    res.json(data);
  } catch (error) {
    res.status(418).json({ error: error.massage });
  }
});

module.exports = router;
