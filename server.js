import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/contact", async (req, res) => {
  const { first_name, last_name, email, message } = req.body;

  if (!first_name || !last_name || !email || !message) {
    return res.status(400).json({ success: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "danishmir1996@gmail.com",
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `
First Name: ${first_name}
Last Name: ${last_name}
Email: ${email}

Message:
${message}
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
