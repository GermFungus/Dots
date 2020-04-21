var router = require('express').Router();
var DB = require("../data-base/DataBase");
var path = require('path');
var bcrypt = require('bcrypt');
router.post('/register' ,async (req , res , next ) => {
    let hash = bcrypt.hashSync(req.body.password , 10);
    let data = req.body;
    data.password = hash;
    let dbresp = await DB.dbWrite(data , 'User');
    let respQuiz = await DB.dbFetch({branch : `${req.body.brnach}`} , 'quizes');
   res.send(["Recieved" , respQuiz]);
});

router.post('/login' , async (req , res ,next)=>{
    let search = {};
    search.email=req.body.email1;
    let resp = await DB.dbFetch(search , 'User');
    if(bcrypt.compareSync(req.body.password1 , resp[0].password)){
        console.log(resp);
        let respQuiz = await DB.dbFetch({branch : `${resp[0].branch}`} , 'quizes');
        console.log(respQuiz);
        res.send(["LoggedIn" , resp[0] , respQuiz]);
    }else{
        res.send(["wrong"]);
    }
})
module.exports = router;