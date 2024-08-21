const nodemailer=require("nodemailer")
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'saidbouchniba8@gmail.com',
      pass: 'eqdz acwe drvb jsqs'
    }
  });
  
  var mailOptions = {
    from: 'saidbouchniba8@gmail.com',
    to: 'hene.ferjani@gmail.com',
    cc:'enawinsialaoy@gmail.com',
    subject: 'welcome to our web_site',
    html:`<h1>Hello</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEQbz-P7BsE81JNqTdbq9lNvj_FFtV0e2Iw&s">
    <p>welcome to our web_site</p>`
    
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });