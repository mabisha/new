const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res, next) => {
  try {
    const { sender, email, subject, message } = req.body;
    console.log(sender, email, subject, message);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "rosemailer.co@gmail.com",
        pass: "dayg oers fjwh tcqk",
      },
    });

    const mailOptions = {
      from: `"${sender}" <${email}>`,
      to: ["info@rosebudschoolnepal.org"],
      subject: subject,
      html: `<p>From: ${email}</p><p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res
      .status(200)
      .send({ message: "Message sent successfully.", status: "success" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to send message.", status: "fail" });
  }
};
