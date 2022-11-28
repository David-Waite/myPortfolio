export default function (req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.zoho.com.au",
    auth: {
      user: "davidwaiteportfolio@zohomail.com.au",
      pass: "KpxMq5xEk1H2JMd6uj22hOFNl1v1",
    },
    secure: true,
  });
  const mailData = {
    from: "davidwaiteportfolio@zohomail.com.au",
    to: "davidwaite122@gmail.com",
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
