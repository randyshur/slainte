const router = require('express').Router();
const Owner = require('../db').import('../models/owner');

// Get all active
router.get('/', (req, res) => {
  Owner.findAll({ where: { active: true } })
    .then(owners => res.status(200).json(owners))
    .catch(err => res.status(500).json({ error: err }))
});

// Get all (admin only)
router.get('/all', (req, res) => {
  Owner.findAll()
    .then(owners => res.status(200).json(owners))
    .catch(err => res.status(500).json({ error: err }))
});

// Get by owner usually for editing
router.get('/:owner', (req, res) => {
  Pie.findOne({ where: { owner: req.params.owner } })
    .then(owner => res.status(200).json(owner))
    .catch(err => res.status(500).json(err))
})

// Create new owner (admin only)
router.post('/', (req, res) => {

  if (!req.errors) {
    const owner = {
      owner: req.body.owner.owner
    }

    Owner.create(owner)
      .then(owner => res.status(200).json(owner))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

// Update a specific owner (admin only)
router.put('/:id', (req, res) => {
  if (!req.errors) {
    Owner.update(req.body.owner, { where: { id: req.params.id }})
      .then(owner => res.status(200).json(owner))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

// Delete a specific owner (admin only)
// Note: Items never deleted only made inactive
router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Owner.update({active: false}, { where: { id: req.params.id }})
      .then(owner => res.status(200).json(owner))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;