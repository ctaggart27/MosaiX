const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const authorized = require('./loginFunctions').authorized;
const getFollowersCount = require('./userFunctions').getFollowersCount;
const getOneSprite = require('./spriteFunctions').getOneSprite;

let login = {
  link: '/login',
  text: 'Login'
};
let logout = {
  link: '/login/logout',
  text: 'Logout'
};

router.get('/', authorized, (req, res, next) => {
  getOneSprite(1)
  .then((spriteId) => {
    res.render('game', {
      sprites: spriteId,
      currUser: req.locals.user,
      button: {
        link: `profile/${req.locals.user.id}`,
        name: 'My profile'
      },
      log: logout
    });
  })
});

module.exports = router;
