import { useTranslation } from "react-i18next";

export default function ContactHeader() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="text-2xl font-semibold text-amber-400 mb-4">
        {t("contact.header.title")}
      </h2>
      <p className="text-gray-300 mb-6">
        {t("contact.header.description")}
      </p>
    </>
  );
}