// eslint-disable-next-line import/no-anonymous-default-export
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
    html: `<div>
              <h2>Name: ${req.body.name}</h2
              <h3>Email: ${req.body.email}</h3>
              <h3>Message: ${req.body.message}</h3>
          </div>`,
  };
  if (req.method === "POST") {
    try {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=your_secret_key&response=${req.body.gRecaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {
          console.log(
            reCaptchaRes,
            "Response from Google reCatpcha verification API"
          );
          if (reCaptchaRes?.score > 0.5) {
            // Save data to the database from here
            res.status(200).json({
              status: "success",
              message: "Enquiry submitted successfully",
            });
          } else {
            res.status(200).json({
              status: "failure",
              message: "Google ReCaptcha Failure",
            });
          }
        });
    } catch (err) {
      res.status(405).json({
        status: "failure",
        message: "Error submitting the enquiry form",
      });
    }
  } else {
    res.status(405);
    res.end();
  }
  console.log(req.body);
  res.send("success");
}
