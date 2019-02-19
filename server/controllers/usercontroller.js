const router = require('express').Router();
const User = require('../db').import('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {

    User.create({
      firstName: req.body.user.firstName,
      lastName: req.body.user.lastName,
      email: req.body.user.email,
      password: bcrypt.hashSync(req.body.user.password, 10)
    })
      .then(
        createSuccess = (user) => {
          let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 })
  
          res.json({
            user: user,
            message: 'user created',
            sessionToken: token
          })
        },
        createError = err => res.send(500, err)
      )
  })

  module.exports = router;