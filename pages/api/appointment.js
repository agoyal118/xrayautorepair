import sendgrid from "@sendgrid/mail";

const SENDGRID_API_KEY_APPOINTMENT = process.env.SENDGRID_API_KEY_APPOINTMENT;

sendgrid.setApiKey(SENDGRID_API_KEY_APPOINTMENT);

async function sendEmail(req, res) {
  const body = req.body;
  const message = `
    Name: ${body.full_name}\r\n
    Phone: ${body.phone_number}\r\n
    Email: ${body.email}\r\n
    Vehicle Make: ${body.make}\r\n
    Vehicle Model: ${body.model}\r\n
    Vehicle Year: ${body.year}\r\n
    Message: ${body.message}\r\n
    Preferred Date: ${body.preferred_date}\r\n
    Secondary Date: ${body.secondary_date}\r\n
    Source: ${body.source}
    `;

  const data = {
    to: "agoyal118@gmail.com",
    from: "agoyal118@gmail.com",
    subject: "Appointment Request",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  try {
    await sendgrid.send(data);
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
  res.status(200).json({ status: "Ok" });
}

export default sendEmail;
