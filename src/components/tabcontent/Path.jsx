import { FiEye, FiDownload } from "react-icons/fi";

const experience = [
  {
    company: "Tech Solutions MX",
    role: "Frontend Developer",
    period: "Ene 2023 - Actualidad",
    details:
      "Desarrollo de interfaces responsivas con React y Tailwind CSS para productos SaaS.",
  },
  {
    company: "Innova Web Studio",
    role: "Diseñador Web",
    period: "Ago 2021 - Dic 2022",
    details:
      "Creación de sitios web modernos y accesibles para pymes usando herramientas no-code y código personalizado.",
  },
  {
    company: "Freelance",
    role: "Desarrollador Full Stack",
    period: "2020 - 2021",
    details:
      "Proyectos personalizados para clientes particulares, incluyendo APIs, paneles admin y landing pages.",
  },
];

const education = [
  {
    institution: "Universidad Tecnológica de México",
    degree: "Ingeniería en Desarrollo de Software",
    period: "2017 - 2021",
  },
  {
    institution: "Platzi",
    degree: "Escuela de Desarrollo Web",
    period: "2022 - Presente",
  },
];

const certifications = [
  {
    name: "Certificación en React",
    issuer: "Udemy",
    year: "2023",
  },
  {
    name: "Frontend Developer",
    issuer: "FreeCodeCamp",
    year: "2022",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    year: "2021",
  },
];

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
            <li
              key={idx}
              className="border-l-4 border-amber-400 pl-5 rounded-md py-3"
            >
              <h3 className="text-xl font-semibold text-neutral-200">
                {job.role}
                <span className="text-neutral-300 font-normal">
                  {" "}
                  @ {job.company}
                </span>
              </h3>
              <p className="text-sm text-neutral-400">{job.period}</p>
              <p className="text-sm text-neutral-300 mt-1">{job.details}</p>
            </li>
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
            <li key={idx} className="border-l-4 border-amber-400 pl-5">
              <h3 className="text-xl font-semibold text-neutral-300">
                {cert.name}
              </h3>
              <p className="text-sm text-neutral-400">{cert.issuer}</p>
              <p className="text-sm text-neutral-300">{cert.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
