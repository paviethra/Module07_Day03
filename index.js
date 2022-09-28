const express = require('express');
const app = express();
const port = 3000;

const nodemailer = require('nodemailer');

app.get('/',(req,res)=>{
    res.render('index')
});
app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
});

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'maximo.reichert@ethereal.email',
        pass: 'DVb4X1kb5fgKPZq5kc'
    }
});

const mailData = {
    from: 'maximo.reichert@ethereal.email',
    to: 'paviorange@gmail.com',
    subject: 'Test Email Subject',
    html: '<h1>This is my first mail using nodemailer</h1>'
};

transporter.sendMail(mailData,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Email Sent:'+info.res);
    }
});