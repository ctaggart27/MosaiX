const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const getSpritesByUser = require('./spriteFunctions.js').getSpritesByUser;

router.get('/', (req, res, next) => {
  res.redirect('/index');
});

router.get('/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  knex('users')
    .where('id', id)
    .first()
    .then((userFromKnex) => {
      if (userFromKnex) {
        if (req.cookies.token) {
          let decodedUser = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
          if (decodedUser.id === id) {
            getSpritesByUser(id)
              .then((allSprites) => {
                res.render('myProfile', {
                  user: userFromKnex,
                  sprites: allSprites
                })
              })
          } else {
            getSpritesByUser(id)
              .then((allSprites) => {
                res.render('profile', {
                  user: userFromKnex,
                  sprites: allSprites
                })
              })
          }
        } else {
          getSpritesByUser(id)
            .then((allSprites) => {
              res.render('profile', {
                user: userFromKnex,
                sprites: allSprites
              })
            })
        }
      } else {
        res.redirect('/')
      }
    })
})

router.get('/:id/settings', (req, res, next) => {
  knex('users')
    .where('id', req.params.id)
    .first()
    .then((thisUser) => {
      res.render('settings', {user: thisUser});
    })
})

router.put('/:id/settings', (req, res, next) => {
  let updatedInfo = req.body;
  knex('users')
    .update(updatedInfo)
    .where('id', req.params.id)
    .then(() => {
      res.status(200).send(true);
    })
})

module.exports = router;
