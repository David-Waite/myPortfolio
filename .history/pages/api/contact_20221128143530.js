export default function (req, res) {
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
    to: "your email",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: <div>{req.body.message}</div>,
  };
  console.log(req.body);
}
