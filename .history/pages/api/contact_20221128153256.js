export default function (req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.EMAIL_ADDRESS,
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
    html: <div>{req.body.message}</div>,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(`error: ${err}`);
    else console.log(`error: ${info} `);
  });
  res.status(200);
}
