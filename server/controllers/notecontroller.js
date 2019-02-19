const router = require('express').Router();
const Note = require('../db').import('../models/note');

// Get all active
router.get('/', (req, res) => {
  Note.findAll({ where: { active: true } })
    .then(notes => res.status(200).json(notes))
    .catch(err => res.status(500).json({ error: err }))
});

// Get all (admin only)
router.get('/all', (req, res) => {
  Note.findAll()
    .then(notes => res.status(200).json(notes))
    .catch(err => res.status(500).json({ error: err }))
});

// Get by note usually for editing
router.get('/:note', (req, res) => {
  Pie.findOne({ where: { note: req.params.note } })
    .then(note => res.status(200).json(note))
    .catch(err => res.status(500).json(err))
})

// Create new note (admin only)
router.post('/', (req, res) => {

  if (!req.errors) {
    const note = {
      note: req.body.note.note
    }

    Note.create(note)
      .then(note => res.status(200).json(note))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

// Update a specific note (admin only)
router.put('/:id', (req, res) => {
  if (!req.errors) {
    Note.update(req.body.note, { where: { id: req.params.id }})
      .then(note => res.status(200).json(note))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

// Delete a specific note (admin only)
// Note: Items never deleted only made inactive
router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Note.update({active: false}, { where: { id: req.params.id }})
      .then(note => res.status(200).json(note))
      .catch(err => res.json(err))
  } else {
    res.status(500).json(req.errors)
  }
})

module.exports = router;