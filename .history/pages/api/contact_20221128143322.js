export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: process.env.EMAIL_ADDRESS,
    auth: {
      user: "demo@demo.gmail",
      pass: "password",
    },
    secure: true,
  });
  console.log(req.body);
}
