import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSend } from "react-icons/fi";

export default function ContactForm({ loading, sendEmail }) {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-300">
            {t("contact.form.name")}
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full mt-1 text-white border border-neutral-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-400"
            placeholder={t("contact.form.namePlaceholder")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-300">
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full mt-1 text-white border border-neutral-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-400"
            placeholder={t("contact.form.emailPlaceholder")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-300">
            {t("contact.form.subject")}
          </label>
          <select
            name="user_subject"
            required
            className="w-full mt-1 border border-neutral-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 text-neutral-100"
            defaultValue=""
          >
            <option value="" disabled>
              {t("contact.form.subjectPlaceholder")}
            </option>
            <option value="empleo">{t("contact.form.subjectJob")}</option>
            <option value="colaboracion">{t("contact.form.subjectCollab")}</option>
            <option value="otro">{t("contact.form.subjectOther")}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-300">
            {t("contact.form.message")}
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full mt-1 text-white border border-neutral-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-400"
            placeholder={t("contact.form.messagePlaceholder")}
          ></textarea>
        </div>
        <div className="flex items-start gap-2 text-sm text-neutral-300">
          <input type="checkbox" id="privacy" required className="mt-1" />
          <label htmlFor="privacy">
            {t("contact.form.accept")}{" "}
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="text-amber-400 hover:underline"
            >
              {t("contact.form.privacyPolicy")}
            </button>
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`bg-neutral-100 text-neutral-900 text-sm px-4 py-2 rounded-md hover:bg-amber-400 transition flex items-center gap-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FiSend /> {loading ? t("contact.form.sending") : t("contact.form.send")}
        </button>
      </form>

      {showPrivacyModal && (
        <PrivacyModal onClose={() => setShowPrivacyModal(false)} />
      )}
    </>
  );
}