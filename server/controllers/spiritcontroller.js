const router = require('express').Router();
const Spirit = require('../db').import('../models/spirit');

// Get all active
router.get('/', (req, res) => {
  Spirit.findAll({ where: { active: true } })
    .then(spirits => res.status(200).json(spirits))
    .catch(err => res.status(500).json({ error: err }))
});

// Get all (admin only)
router.get('/all', (req, res) => {
  Spirit.findAll()
    .then(spirits => res.status(200).json(spirits))
    .catch(err => res.status(500).json({ error: err }))
});

// Get by spirit usually for editing
router.get('/:spirit', (req, res) => {
  Pie.findOne({ where: { spirit: req.params.spirit } })
    .then(spirit => res.status(200).json(spirit))
    .catch(err => res.status(500).json(err))
})

// Create new spirit (admin only)
router.post('/', (req, res) => {

  if (!req.errors) {
    const spirit = {
      spirit: req.body.spirit.spirit
    }

    Spirit.create(spirit)
      .then(spirit => res.status(200).json(spirit))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

// Update a specific spirit (admin only)
router.put('/:id', (req, res) => {
  if (!req.errors) {
    Spirit.update(req.body.spirit, { where: { id: req.params.id }})
      .then(spirit => res.status(200).json(spirit))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

// Delete a specific spirit (admin only)
// Note: Items never deleted only made inactive
router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Spirit.update({active: false}, { where: { id: req.params.id }})
      .then(spirit => res.status(200).json(spirit))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;