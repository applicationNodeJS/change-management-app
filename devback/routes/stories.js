const express = require('express');
const router = express.Router();
const Story = require('../models/Story');

// Créer une user story
router.post('/', async (req, res) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).send(story);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

// Récupérer toutes les stories
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find();
    res.send(stories);
  } catch (err) {
    res.status(500).send({ error: 'Server error' });
  }
});

// Mettre à jour le statut d'une story
router.patch('/:id', async (req, res) => {
  try {
    const story = await Story.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(story);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

module.exports = router;