// src/components/contact/Contact.jsx
import { useState } from "react";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Toast from "./Toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // 'success' o 'error'
  const [showToast, setShowToast] = useState(false);

  const showToastMessage = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const subject = form.user_subject.value;
    const message = form.message.value.trim();

    // Validaciones personalizadas con toast
    if (name.length < 2) {
      showToastMessage("error", "Por favor ingresa un nombre válido.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToastMessage("error", "Correo no válido.");
      return;
    }

    if (!subject) {
      showToastMessage("error", "Selecciona un asunto.");
      return;
    }

    if (message.length < 10) {
      showToastMessage(
        "error",
        "El mensaje debe tener al menos 10 caracteres."
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://portfolio-v2-u9wg.onrender.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );

      const { message: resultMessage } = await res.json();

      if (res.ok) {
        showToastMessage("success", resultMessage);
        form.reset();
      } else {
        showToastMessage(
          "error",
          resultMessage || "Error al enviar el mensaje."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      showToastMessage("error", "Ocurrió un error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="max-w-xl mx-auto bg-gradient-to-br from-[#0b0e1a] via-[#1a1f2f] to-[#0b0e1a] 
          border border-[#1a2a4a] 
          rounded-3xl 
          shadow-xl shadow-black/30 
          transition duration-300
          ring-1 ring-[#2e2e2e] p-6"
    >
      <ContactHeader />
      <ContactForm loading={loading} sendEmail={sendEmail} />
      <ContactInfo />
      {showToast && <Toast message={toastMessage} type={toastType} />}
    </div>
  );
}
