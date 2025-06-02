import { useState } from "react";
import { FiEye, FiDownload, FiChevronDown, FiChevronUp } from "react-icons/fi";

const experience = [
  {
    company: "Paypal",
    role: "Agente de soluciones para clientes",
    period: "Julio 2023 - Marzo 2025",
    details:
      "Agente de soporte en empresa Fintech global, resolviendo incidencias de pagos digitales y optimizando la experiencia del cliente.",
  },
  {
    company: "Teleperformance",
    role: "Supervisor - Agente de atención",
    period: "Agosto 2019 - Junio 2023",
    details:
      "Supervisor y agente en BPO global, gestionando soporte para banca estadounidense y atención a clientes de app de entrega de comida.",
  },
];

const education = [
  {
    institution: "Universidad Tecnológica Latinoamericana en Línea",
    degree: "Licenciatura en Administración de Tecnologías de la Información",
    period: "Febrero 2022 - Actualidad",
  },
];

const certifications = [
  {
    name: "Certificación en React",
    issuer: "Udemy",
    year: "2023",
    viewUrl: "/certificados/react-certificado.pdf",
    downloadUrl: "/certificados/react-certificado.pdf",
  },
  {
    name: "Frontend Developer",
    issuer: "FreeCodeCamp",
    year: "2022",
    viewUrl: "/certificados/frontend-certificado.pdf",
    downloadUrl: "/certificados/frontend-certificado.pdf",
  },
];

function ExperienceItem({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-l-4 border-amber-400 pl-5 rounded-md py-3 space-y-1">
      <h3 className="text-xl font-semibold text-neutral-300">
        {job.role}
        <span className="text-neutral-300 font-normal"> @ {job.company}</span>
      </h3>
      <p className="text-sm text-neutral-400">{job.period}</p>
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-amber-400 flex items-center gap-1 hover:underline focus:outline-none"
      >
        {open ? (
          <>
            <FiChevronUp className="text-base" />
            Mostrar menos
          </>
        ) : (
          <>
            <FiChevronDown className="text-base" />
            Mostrar más
          </>
        )}
      </button>
      {open && (
        <p className="text-sm text-neutral-300 mt-2 transition-all duration-300">
          {job.details}
        </p>
      )}
    </li>
  );
}

export default function Path() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-0 space-y-16">
      {/* Enlaces de CV */}
      <div className="flex justify-center gap-6 mt-4 mb-4">
        <a
          href="/cv-online"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-neutral-100 hover:text-amber-400 hover:underline gap-2 transition"
        >
          <FiEye className="text-base" />
          Ver CV
        </a>
        <a
          href="/cv.pdf"
          download
          className="flex items-center text-sm text-neutral-100 hover:text-amber-400 hover:underline gap-2 transition"
        >
          <FiDownload className="text-base" />
          Descargar CV
        </a>
      </div>

      {/* Experiencia Laboral */}
      <div>
        <h2 className="text-3xl font-extrabold text-amber-400 mb-6">
          Experiencia Laboral
        </h2>
        <ul className="space-y-8">
          {experience.map((job, idx) => (
            <ExperienceItem key={idx} job={job} />
          ))}
        </ul>
      </div>

      {/* Educación */}
      <div>
        <h2 className="text-3xl font-extrabold text-amber-400 mb-10">
          Educación
        </h2>
        <ul className="space-y-6">
          {education.map((edu, idx) => (
            <li key={idx} className="border-l-4 border-amber-400 pl-5">
              <h3 className="text-xl font-semibold text-neutral-300">
                {edu.degree}
              </h3>
              <p className="text-sm text-neutral-400">{edu.institution}</p>
              <p className="text-sm text-neutral-300">{edu.period}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Certificados */}
      <div>
        <h2 className="text-3xl font-extrabold text-amber-400 mb-10">
          Certificados
        </h2>
        <ul className="space-y-6">
          {certifications.map((cert, idx) => (
            <li key={idx} className="border-l-4 border-amber-400 pl-5 space-y-1">
              <h3 className="text-xl font-semibold text-neutral-300">
                {cert.name}
              </h3>
              <p className="text-sm text-neutral-400">{cert.issuer}</p>
              <p className="text-sm text-neutral-300">{cert.year}</p>
              <div className="flex gap-4 mt-2">
                <a
                  href={cert.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-neutral-100 hover:text-amber-400 hover:underline gap-2 transition"
                >
                  <FiEye className="text-base" />
                  Ver PDF
                </a>
                <a
                  href={cert.downloadUrl}
                  download
                  className="flex items-center text-sm text-neutral-100 hover:text-amber-400 hover:underline gap-2 transition"
                >
                  <FiDownload className="text-base" />
                  Descargar PDF
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}