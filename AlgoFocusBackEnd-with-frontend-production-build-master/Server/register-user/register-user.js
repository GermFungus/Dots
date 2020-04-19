var router = require('express').Router();
var DB = require("../data-base/DataBase");
var Mailer = require('../Mailer/Mailer');
var path = require('path');
router.post('/register' ,async (req , res , next ) => {
    if(req.files){
        console.log(req.files)
        let image = req.files.file;
        let pathi = path.join(__dirname , `../static-portfolio/assets/images/${image.name}.jpg`);
        image.mv(pathi ,async (err) =>{
            if(err) console.log(err);
            else {
                let store = await DB.dbImagestore(`/images/${image.name}.jpg` , image.name);
                res.send(["sucsess"]);
            }
        })
    }
    else{
    console.log(req.body);
    let verify = false;
    if(req.body.params.user.phone){
        let phone = req.body.params.user.phone;
        if(phone.length === 10){
            verify = true;
            for(i = 0 ; i < 10 ; ++i){
                if(isNaN(phone[i])){
                    verify = false;
                }
            }
        }
    }
    if(verify === true){
        let resp = await DB.dbWrite(req.body.params.user);
        let mailResp = await Mailer.sendMail(req.body.params.user);
        if(mailResp){
            res.send(["sucess"]);
        }
    }
    else{
        res.send(["Incomplete"]);
    }
}
});

router.get('/data' , async (req , res , next) =>{
    let data = await DB.dbFetch();
    res.send(data);
});

module.exports = router;