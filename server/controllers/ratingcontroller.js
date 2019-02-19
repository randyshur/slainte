const router = require('express').Router();
const Rating = require('../db').import('../models/rating');

// Get all active
router.get('/', (req, res) => {
  Rating.findAll({ where: { active: true } })
    .then(ratings => res.status(200).json(ratings))
    .catch(err => res.status(500).json({ error: err }))
});

// Get all (admin only)
router.get('/all', (req, res) => {
  Rating.findAll()
    .then(ratings => res.status(200).json(ratings))
    .catch(err => res.status(500).json({ error: err }))
});

// Get by rating usually for editing
router.get('/:rating', (req, res) => {
  Pie.findOne({ where: { rating: req.params.rating } })
    .then(rating => res.status(200).json(rating))
    .catch(err => res.status(500).json(err))
})

// Create new rating (admin only)
router.post('/', (req, res) => {

  if (!req.errors) {
    const rating = {
      rating: req.body.rating.rating
    }

    Rating.create(rating)
      .then(rating => res.status(200).json(rating))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

// Update a specific rating (admin only)
router.put('/:id', (req, res) => {
  if (!req.errors) {
    Rating.update(req.body.rating, { where: { id: req.params.id }})
      .then(rating => res.status(200).json(rating))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

// Delete a specific rating (admin only)
// Note: Items never deleted only made inactive
router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Rating.update({active: false}, { where: { id: req.params.id }})
      .then(rating => res.status(200).json(rating))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;