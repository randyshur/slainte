const router = require('express').Router();
const Region = require('../db').import('../models/region');

// Get all active
router.get('/', (req, res) => {
  Region.findAll({ where: { active: true } })
    .then(regions => res.status(200).json(regions))
    .catch(err => res.status(500).json({ error: err }))
});

// Get all (admin only)
router.get('/all', (req, res) => {
  Region.findAll()
    .then(regions => res.status(200).json(regions))
    .catch(err => res.status(500).json({ error: err }))
});

// Get by region usually for editing
router.get('/:region', (req, res) => {
  Pie.findOne({ where: { region: req.params.region } })
    .then(region => res.status(200).json(region))
    .catch(err => res.status(500).json(err))
})

// Create new region (admin only)
router.post('/', (req, res) => {

  if (!req.errors) {
    const region = {
      region: req.body.region.region
    }

    Region.create(region)
      .then(region => res.status(200).json(region))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

// Update a specific region (admin only)
router.put('/:id', (req, res) => {
  if (!req.errors) {
    Region.update(req.body.region, { where: { id: req.params.id }})
      .then(region => res.status(200).json(region))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

// Delete a specific region (admin only)
// Note: Items never deleted only made inactive
router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Region.update({active: false}, { where: { id: req.params.id }})
      .then(region => res.status(200).json(region))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;