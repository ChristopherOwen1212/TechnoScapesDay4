var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'Welcome to Tokopaedi API' });
});

router.post('/login', (req, res) => {
  var acc = {
    username: req.body.username,
    password: req.body.password
  };

  // logic ngecheck DB match ga pass sama usernamneya
  // ...

  const isMatch = true;
  if (isMatch) {
    res.json({
      accessToken: jwt.sign({
        username: req.body.username
      }, process.env.SECRET_KEY, {
        expiresIn: 10 // jwt token expired 10 detik
      })
    });
  }
  else {
    res.json({
      message: 'Login Gagal!'
    })
  }

})

module.exports = router;