const nodemailer = require('nodemailer');
// Port: 465 (SSL required) or 587 (TLS required)
let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth:{
        user: "daniel99korban@gmail.com",
        pass: "M1p2e3d4h5"
    }
})

transport.sendMail({
    from: "Danielzin <daniel99korban@gmail.com>",
    to: "daniel99korban@gmail.com",
    subject: "Testando envio de emails",
    text: "Seja Muito Bem-vindo! Este é meu primeiro email de teste feito com node usando a lib NodeMailer do npm. Obrigado ;)",
    html: "<h1>Deu foi certo siow</h1>"
}).then(messege => {
    console.log(messege)
}).catch(err => {
    console.log(err)
});