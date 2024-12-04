




// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors()); // To allow cross-origin requests
// app.use(express.json()); // To parse incoming JSON requests

// // Email configuration (use your own email service and credentials)
// require('dotenv').config();


// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

  

// // POST route to send contact form data
// app.post("/send-email", (req, res) => {
//   const { name, email, message } = req.body;

//   // Email content
//   const mailOptions = {
//     from: email,
//     to: "dusejaayush45@gmail.com", // Your email address
//     subject: `New Contact Message from ${name}`,
//     text: `You have received a new message from ${name} (${email}):\n\n${message}`,
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       return res.status(500).json({ message: "Failed to send email." });
//     }
//     res.status(200).json({ message: "Email sent successfully." });
//   });
// });

// // Start the server
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Update this to match your frontend's origin
    methods: ["POST"], // Allow only POST method for the contact form
    allowedHeaders: ["Content-Type"], // Allow the necessary headers
  })
);
app.use(express.json()); // To parse incoming JSON requests

// Email configuration (use your own email service and credentials)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST route to send contact form data
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Email content
  const mailOptions = {
    from: email,
    to: "dusejaayush45@gmail.com", // Your email address
    subject: `New Contact Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to send email." });
    }
    res.status(200).json({ message: "Email sent successfully." });
  });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
