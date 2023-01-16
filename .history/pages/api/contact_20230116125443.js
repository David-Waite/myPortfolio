import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  if (req.method === "POST") {
    try {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRETKEY}&response=${req.body.gRecaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {
          console.log(
            reCaptchaRes,
            "Response from Google reCaptcha verification API"
          );
          if (reCaptchaRes?.score > 0.5) {
            // Save data to the database from here
            try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: process.env.PERSONAL_EMAIL_ADDRESS, // Your email where you'll receive emails
      from: process.env.EMAIL_ADDRESS, // your website email address here
      subject: `MESSAGE VIA PORTFOLIO FROM: ${req.body.name}`,
      html: `
      <div>
        <h2>Name: ${req.body.name}</h2
        <h3>Email: ${req.body.email}</h3>
        <h3>Message: ${req.body.message}</h3>
      </div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
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

  

  return res.status(200).json({ error: "" });
}

export default sendEmail;
