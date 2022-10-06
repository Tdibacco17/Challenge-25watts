import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVICE,
            port: 587,
            secure: false, // true for 465, false for other ports
            tls: {
                ciphers: 'SSLv3'
            },
            auth: {
                user: process.env.EMAIL_USERNAME, // variables de entorno
                pass: process.env.EMAIL_PASSWORD, // variables de entorno
            },
        });

        let info = await transporter.sendMail({
            from: process.env.EMAIL_SENDER, // sender address
            to: process.env.EMAIL_SENDER, // list of receivers
            subject: `${name} te envio un mensaje`, // Subject line
            text: `
            nombre= ${name}
            email= ${email}
            telefono= ${phone}
            ${message}
            `, // plain text body
            // html: "<b>{asdas}</b>", // html body
        });

        transporter.sendMail(info, (error, info) => {
            if (error) {
                return console.log(error)
            } else {
                return console.log('Message sent: ' + info.response);
            }
        })
        return res.send("no entro al transporter.sendMail()")
    } catch (e) {
        console.log(e.message)
    }
}
