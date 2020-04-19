var nodemailer = require('nodemailer');

let Mailer = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : process.env.MailUser,
        pass : process.env.MailPass
    }
});





var sendMail = async (data)=>{
    var mailOption = { 
        from: process.env.MailUser,
        to : data.email,
        subject : 'Response for the form submission on Ofform',
        text : `Hello ${data.firstName},
        Following are your responses :
        First Name : ${data.firstName}
        Last Name : ${data.lastName}
        E-Mail Address : ${data.email} 
        Phone Number : ${data.phone}
        Date Of Birtf : Year : ${data.dp.year}
                        Month : ${data.dp.month}
                        Day : ${data.dp.day}
        Regards
        Kapinjal`
    };
    let sucess = await Mailer.sendMail(mailOption);
    return sucess;
}

module.exports.sendMail = sendMail;