const router = require('express').Router();
const Grain = require('../db').import('../models/grain');

// Get all active
router.get('/', (req, res) => {
  Grain.findAll({ where: { active: true } })
    .then(grains => res.status(200).json(grains))
    .catch(err => res.status(500).json({ error: err }))
});

// Get all (admin only)
router.get('/all', (req, res) => {
  Grain.findAll()
    .then(grains => res.status(200).json(grains))
    .catch(err => res.status(500).json({ error: err }))
});

// Get by grain usually for editing
router.get('/:grain', (req, res) => {
  Grain.findOne({ where: { grain: req.params.grain } })
    .then(grain => res.status(200).json(grain))
    .catch(err => res.status(500).json(err))
})

router.get('/id/:id', (req, res) => {
  Grain.findOne({ where: { id: req.params.id } })
    .then(grain => res.status(200).json(grain))
    .catch(err => res.status(500).json(err))
})

// Create new grain (admin only)
router.post('/', (req, res) => {

  if (!req.errors) {
    const grain = {
      grain: req.body.grain.grain
    }

    Grain.create(grain)
      .then(grain => res.status(200).json(grain))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

// Update a specific grain (admin only)
router.put('/:id', (req, res) => {
  if (!req.errors) {
    Grain.update(req.body.grain, { where: { id: req.params.id }})
      .then(grain => res.status(200).json(grain))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

// Delete a specific grain (admin only)
// Note: Items never deleted only made inactive
router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Grain.update({active: false}, { where: { id: req.params.id }})
      .then(grain => res.status(200).json(grain))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;