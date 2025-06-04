import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function PrivacyModal({ onClose }) {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative bg-gradient-to-b from-[#000c2a] via-[#011c4f] to-[#012169] text-neutral-200 border border-neutral-600 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Botón de cierre (esquina superior derecha) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-neutral-400 hover:text-white text-xl font-bold"
          aria-label={t("contact.modal.close_button")}
        >
          ×
        </button>

        {/* Título */}
        <h1
          id="privacy-modal-title"
          tabIndex={-1}
          className="text-2xl font-bold text-amber-400 mb-2"
        >
          {t("contact.modal.title")}
        </h1>

        {/* Fecha actualizada */}
        <p className="mb-4 text-sm">
          <strong>{t("contact.modal.updated")}</strong> 30 de mayo de 2025
        </p>

        {/* Secciones iteradas desde JSON */}
        {Object.entries(
          t("contact.modal.sections", { returnObjects: true })
        ).map(([key, section]) => (
          <div key={key} className="mt-4">
            <h2 className="text-lg text-amber-400 font-semibold">{section.title}</h2>
            <p className="mt-1">{section.content}</p>
            {section.list && (
              <ul className="list-disc ml-5 mt-1">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            {section.note && <p className="mt-2">{section.note}</p>}
          </div>
        ))}

        {/* Último párrafo de contacto directo */}
        <p className="mt-4">{t("contact.modal.sections.7.content")}</p>
        <p>
          <a
            href="mailto:hectormartilb@gmail.com"
            className="text-amber-400 hover:underline"
          >
            hectormartilb@gmail.com
          </a>
        </p>

        {/* Botón cerrar */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="mt-4 bg-neutral-100 text-neutral-900 text-sm px-4 py-2 rounded-md hover:bg-amber-400 transition"
          >
            {t("contact.modal.close_button")}
          </button>
        </div>
      </div>
    </div>
  );
}