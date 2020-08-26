app.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            // should be replaced with real sender's account
            user: 'donotreply.to.PetMatch@gmail.com',
            pass: '1+sCH33P\\/\/ine'
        }
    });
    let mailOptions = {
        // should be replaced with real recipient's account
        to: 'patelcatalina@gmail.com',
        subject: req.body.subject,
        text: req.body.message
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
})