import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Toast from "./Toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [showToast, setShowToast] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const sectionId = lang === "es" ? "contacto" : "contact";

  const showToastMessage = (type, messageKey) => {
    setToastType(type);
    setToastMessage(messageKey);
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

    if (name.length < 2) {
      showToastMessage("error", "error_name");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToastMessage("error", "error_email");
      return;
    }

    if (!subject) {
      showToastMessage("error", "error_subject");
      return;
    }

    if (message.length < 10) {
      showToastMessage("error", "error_message");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://portfolio-v2-u9wg.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const { message: resultMessage } = await res.json();

      if (res.ok) {
        showToastMessage("success", "success");
        form.reset();
      } else {
        showToastMessage("error", "fail");
      }
    } catch (error) {
      console.error("Error:", error);
      showToastMessage("error", "fail");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={sectionId}>
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
        {showToast && <Toast messageKey={toastMessage} type={toastType} />}
      </div>
    </section>
  );
}