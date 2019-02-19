const router = require('express').Router();
const Distiller = require('../db').import('../models/distiller');

// Get all active
router.get('/', (req, res) => {
  Distiller.findAll({ where: { active: true } })
    .then(distillers => res.status(200).json(distillers))
    .catch(err => res.status(500).json({ error: err }))
});

// Get all (admin only)
router.get('/all', (req, res) => {
  Distiller.findAll()
    .then(distillers => res.status(200).json(distillers))
    .catch(err => res.status(500).json({ error: err }))
});

// Get by distiller usually for editing
router.get('/:distiller', (req, res) => {
  Pie.findOne({ where: { distiller: req.params.distiller } })
    .then(distiller => res.status(200).json(distiller))
    .catch(err => res.status(500).json(err))
})

// Create new distiller (admin only)
router.post('/', (req, res) => {

  if (!req.errors) {
    const distiller = {
      distiller: req.body.distiller.distiller
    }

    Distiller.create(distiller)
      .then(distiller => res.status(200).json(distiller))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

// Update a specific distiller (admin only)
router.put('/:id', (req, res) => {
  if (!req.errors) {
    Distiller.update(req.body.distiller, { where: { id: req.params.id }})
      .then(distiller => res.status(200).json(distiller))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

// Delete a specific distiller (admin only)
// Note: Items never deleted only made inactive
router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Distiller.update({active: false}, { where: { id: req.params.id }})
      .then(distiller => res.status(200).json(distiller))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;