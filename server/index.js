const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// ✅ Permitir solo solicitudes desde tu dominio en Vercel
app.use(cors({
  origin: "https://www.hectormartil.dev/"
}));

app.use(express.json());

// Ruta POST /contact
app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validaciones básicas
  if (
    !name || name.trim().length < 2 ||
    !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !subject || !message || message.trim().length < 10
  ) {
    return res.status(400).json({ message: "Datos inválidos en el formulario." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_TO,
      subject: `Nuevo mensaje de contacto: ${subject}`,
      text: `
Tienes un nuevo mensaje desde tu portafolio:

🧑 Nombre: ${name}
📧 Correo: ${email}
📝 Asunto: ${subject}

📨 Mensaje:
${message}
      `,
    });

    res.status(200).json({ message: "Correo enviado exitosamente." });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ message: "Error al enviar el mensaje." });
  }
});

// Puerto del servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});