import { useState } from "react";
import { FiEye, FiDownload, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { experience, education, certifications, languages } from "./pathData";

function ExperienceItem({ job }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <li className="bg-gradient-to-br from-[#0b0e1a] via-[#1a1f2f] to-[#0b0e1a] border border-[#1a2a4a] rounded-2xl shadow-xl shadow-black/30 transition duration-300 hover:scale-105 p-5">
      <h3 className="text-xl font-semibold text-neutral-100 mb-1">
        {job.company}
        <span className="text-neutral-400 font-normal">
          {" "}
          - {t(job.roleKey)}
        </span>
      </h3>
      <p className="text-sm text-neutral-400 mb-2">{t(job.periodKey)}</p>
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-amber-400 flex items-center gap-1 hover:underline focus:outline-none"
      >
        {open ? (
          <>
            <FiChevronUp className="text-base" />
            {t("path.showLess")}
          </>
        ) : (
          <>
            <FiChevronDown className="text-base" />
            {t("path.showMore")}
          </>
        )}
      </button>
      {open && (
        <p className="text-sm text-neutral-300 mt-3 transition-all duration-300">
          {t(job.detailsKey)}
        </p>
      )}
    </li>
  );
}

export default function Path() {
  const { t } = useTranslation();

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 space-y-20">
      {/* Idiomas */}
      <div>
        <h2 className="text-3xl font-extrabold text-amber-400 mb-8">
          {t("path.languages")}
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {languages.map((lang, idx) => (
            <li
              key={idx}
              className="bg-gradient-to-br from-[#0b0e1a] via-[#1a1f2f] to-[#0b0e1a] border border-[#1a2a4a] rounded-2xl shadow-xl shadow-black/30 transition duration-300 hover:scale-105 p-5"
            >
              <h3 className="text-xl font-semibold text-neutral-100 mb-1">
                {t(lang.languageKey)}
              </h3>
              <p className="text-sm text-neutral-400">{t(lang.levelKey)}</p>
              <p className="text-sm text-neutral-400">{lang.level}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={lang.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-amber-400 hover:underline"
                >
                  <FiEye className="text-base" /> {t("path.pdf")}
                </a>
                <a
                  href={lang.downloadUrl}
                  download
                  className="flex items-center gap-2 text-sm text-amber-400 hover:underline"
                >
                  <FiDownload className="text-base" /> {t("path.pdf")}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Experiencia Laboral */}
      <div>
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-3xl font-extrabold text-amber-400">
              {t("path.experience")}
            </h2>
            <div className="flex gap-4 justify-center sm:justify-end">
              <a
                href="/cv-online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-md text-amber-400 hover:underline gap-2 transition"
              >
                <FiEye className="text-base" /> {t("path.cv")}
              </a>
              <a
                href="/cv.pdf"
                download
                className="flex items-center text-md text-amber-400 hover:underline gap-2 transition"
              >
                <FiDownload className="text-base" /> {t("path.cv")}
              </a>
            </div>
          </div>
        </div>
        <ul className="space-y-6">
          {experience.map((job, idx) => (
            <ExperienceItem key={idx} job={job} />
          ))}
        </ul>
      </div>

      {/* Educación */}
      <div>
        <h2 className="text-3xl font-extrabold text-amber-400 mb-8">
          {t("path.education")}
        </h2>
        <ul className="grid gap-6">
          {education.map((edu, idx) => (
            <li
              key={idx}
              className="bg-gradient-to-br from-[#0b0e1a] via-[#1a1f2f] to-[#0b0e1a] border border-[#1a2a4a] rounded-2xl shadow-xl shadow-black/30 transition duration-300 hover:scale-105 p-5"
            >
              <h3 className="text-xl font-semibold text-neutral-100 mb-1">
                {t(edu.degreeKey)}
              </h3>
              <p className="text-sm text-neutral-400">{edu.institution}</p>
              <p className="text-sm text-neutral-300 mt-1">{t(edu.periodKey)}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Certificados */}
      <div>
        <h2 className="text-3xl font-extrabold text-amber-400 mb-8">
          {t("path.certifications")}
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, idx) => (
            <li
              key={idx}
              className="bg-gradient-to-br from-[#0b0e1a] via-[#1a1f2f] to-[#0b0e1a] border border-[#1a2a4a] rounded-2xl shadow-xl shadow-black/30 transition duration-300 hover:scale-105 p-5"
            >
              <h3 className="text-xl font-semibold text-neutral-100 mb-1">
                {t(cert.nameKey)}
              </h3>
              <p className="text-sm text-neutral-400">{cert.issuer}</p>
              <p className="text-sm text-neutral-300 mt-1">{cert.year}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={cert.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-amber-400 hover:underline"
                >
                  <FiEye className="text-base" /> {t("path.pdf")}
                </a>
                <a
                  href={cert.downloadUrl}
                  download
                  className="flex items-center gap-2 text-sm text-amber-400 hover:underline"
                >
                  <FiDownload className="text-base" /> {t("path.pdf")}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
