import nodemailer from "nodemailer";

export const mailer = async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.email",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "tomasdibacco@gmail.com", // variables de entorno
            pass: "vbllztcqbbpnatbf", // variables de entorno
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