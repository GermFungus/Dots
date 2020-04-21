const    express = require('express');
var     router = express.Router();
const fs = require('fs');
var DB = require('./data-base/DataBase');
var bcrypt = require('bcrypt');
var regiterUser = require('./register-user/register-user')
console.log("Yes");
router.use('/user' , regiterUser);
router.use('/upload', async (req , res , next)=>{
    if(req.files){
        let rawdata = fs.readFileSync(req.files.file.tempFilePath);
        let quize = JSON.parse(rawdata);
        console.log(quize);
        let search = {};
        search.email="admin@admin.com";
        let resp = await DB.dbFetch(search , 'User');
        if(bcrypt.compareSync(req.body.password , resp[0].password)){
            console.log("writing");
            let wait = DB.dbWrite(quize , "quizes");
            res.send(["true"]);
        }
        
    }
})
module.exports = router;
