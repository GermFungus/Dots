const    express = require('express');
var     router = express.Router();
var regiterUser = require('./register-user/register-user')
console.log("Yes");
router.use('/user' , regiterUser);
module.exports = router;
