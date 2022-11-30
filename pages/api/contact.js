export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.zoho.com.au",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.PERSONAL_EMAIL_ADDRESS,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div>
              <h2>Name: ${req.body.name}</h2
              <h3>Email: ${req.body.email}</h3>
              <h3>Message: ${req.body.message}</h3>
          </div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  console.log(req.body);
  res.send("success");
}
