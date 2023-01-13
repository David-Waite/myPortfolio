import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
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

  return res.status(200).json({ error: "" });
}

export default sendEmail;
