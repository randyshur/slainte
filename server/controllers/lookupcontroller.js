const router = require('express').Router();
const Bottler = require('../db').import('../models/bottler');

// Get all active
router.get('/', (req, res) => {
  Bottler.findAll({ where: { active: true } })
    .then(bottlers => res.status(200).json(bottlers))
    .catch(err => res.status(500).json({ error: err }))
});

// Get all (admin only)
router.get('/all', (req, res) => {
  Bottler.findAll()
    .then(bottlers => res.status(200).json(bottlers))
    .catch(err => res.status(500).json({ error: err }))
});

// Get by bottler usually for editing
router.get('/:bottler', (req, res) => {
  Pie.findOne({ where: { bottler: req.params.bottler } })
    .then(bottler => res.status(200).json(bottler))
    .catch(err => res.status(500).json(err))
})

// Create new bottler (admin only)
router.post('/', (req, res) => {

  if (!req.errors) {
    const bottler = {
      bottler: req.body.bottler
    }

    Bottler.create(bottler)
      .then(bottler => res.status(200).json(bottler))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

// Update a specific bottler (admin only)
router.put('/:id', (req, res) => {
  if (!req.errors) {
    Bottler.update(req.body.bottler, { where: { id: req.params.id }})
      .then(bottler => res.status(200).json(bottler))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

// Delete a specific bottler (admin only)
// Note: Items never deleted only made inactive
router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Bottler.update({active: false}, { where: { id: req.params.id }})
      .then(bottler => res.status(200).json(bottler))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;