import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <p className="text-sm text-neutral-300 mt-4 mb-4">
      {t("contact.info.prefix")}{" "}
      <a
        href="mailto:hectormartilb@gmail.com"
        className="text-amber-400 hover:underline"
      >
        hectormartilb@gmail.com
      </a>
    </p>
  );
}