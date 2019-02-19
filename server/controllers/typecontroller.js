const router = require('express').Router();
const Type = require('../db').import('../models/type');

// Get all active
router.get('/', (req, res) => {
  Type.findAll({ where: { active: true } })
    .then(types => res.status(200).json(types))
    .catch(err => res.status(500).json({ error: err }))
});

// Get all (admin only)
router.get('/all', (req, res) => {
  Type.findAll()
    .then(types => res.status(200).json(types))
    .catch(err => res.status(500).json({ error: err }))
});

// Get by type usually for editing
router.get('/:type', (req, res) => {
  Pie.findOne({ where: { type: req.params.type } })
    .then(type => res.status(200).json(type))
    .catch(err => res.status(500).json(err))
})

// Create new type (admin only)
router.post('/', (req, res) => {

  if (!req.errors) {
    const type = {
      type: req.body.type.type
    }

    Type.create(type)
      .then(type => res.status(200).json(type))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

// Update a specific type (admin only)
router.put('/:id', (req, res) => {
  if (!req.errors) {
    Type.update(req.body.type, { where: { id: req.params.id }})
      .then(type => res.status(200).json(type))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

// Delete a specific type (admin only)
// Note: Items never deleted only made inactive
router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Type.update({active: false}, { where: { id: req.params.id }})
      .then(type => res.status(200).json(type))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;