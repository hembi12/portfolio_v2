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
      showToastMessage("error", "El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const { message: resultMessage } = await res.json();
      showToastMessage("success", resultMessage);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      showToastMessage("error", "Ocurrió un error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#1f1f1f] border border-[#2a2a2a] rounded-xl shadow-inner shadow-black/40 ring-1 ring-[#2e2e2e] p-6">
      <ContactHeader />
      <ContactForm loading={loading} sendEmail={sendEmail} />
      <ContactInfo />
      {showToast && <Toast message={toastMessage} type={toastType} />}
    </div>
  );
}