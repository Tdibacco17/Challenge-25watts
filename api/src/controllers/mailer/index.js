import nodemailer from "nodemailer";
import { google } from "googleapis";
const OAuth2 = google.auth.OAuth2;

const accountTransport = {
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: "tomasdibacco@gmail.com",
        clientId: "798674056347-15k83ntflno2clqkgq6s4im920c4chdq.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken: "1//04UuHqUP-_C5eCgYIARAAGAQSNwF-L9IrF03IoIGEObV9hZ4BfcC1XENvkIJmmXRqfpaGkVzsiFNKHmkYxqEGndjTNa4GyafGT5g"
    }
}

export const mail_rover = async (callback) => {
    const oauth2Client = new OAuth2(
        accountTransport.auth.clientId,
        accountTransport.auth.clientSecret,
        "https://developers.google.com/oauthplayground",
    );
    oauth2Client.setCredentials({
        refresh_token: accountTransport.auth.refreshToken,
        tls: {
            rejectUnauthorized: false
        }
    });
    oauth2Client.getAccessToken((err, token) => {
        if (err)
            return console.log(err);;
        accountTransport.auth.accessToken = token;
        callback(nodemailer.createTransport(accountTransport));
    });
};


export const mailer = async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.email",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            type: 'OAuth2',
            user: "tomasdibacco@gmail.com", // variables de entorno
            pass: "vbllztcqbbpnatbf", // variables de entorno
            clientId: accountTransport.auth.clientId,
            clientSecret: accountTransport.auth.clientSecret,
            refreshToken: accountTransport.auth.accessToken
        },
    });
    // await new Promise((resolve, reject) => {
    //     // verify connection configuration
    //     transporter.verify(function (error, success) {
    //       if (error) {
    //         console.log(error);
    //         reject(error);
    //       } else {
    //         console.log("Server is ready to take our messages");
    //         resolve(success);
    //       }
    //     });
    //   });

      let info = await transporter.sendMail({
        from: '"Email Prueba !" <tomasdibacco@gmail.com>', // sender address
        to: "tomasdibacco@gmail.com", // list of receivers
        subject: "Prueba nodemailer ✔", // Subject line
        text: "Funciona ✔", // plain text body
        // html: "<b>Hello world?</b>", // html body
    });

    const result = await transporter.sendMail(info);
    return result;

    }catch(e){
        console.log(e.message)
    }
}

//
//     try {
       

//         const result = await transporter.sendMail(info);
//         console.log(result)
//         return result;
//     } catch (e) {
//         console.log(e.menssage)
//     }
// }
