import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiVercel,
  SiFirebase,
  SiDotenv,
  SiTwilio,
  SiGithub,
  SiJavascript,
  SiExpress,
  SiFramer,
  SiFormspree,
} from "react-icons/si";
import {
  MdPhoneIphone,
  MdTabletMac,
  MdDarkMode,
  MdTranslate,
} from "react-icons/md";
import {
  FaDesktop,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Portafolio V1",
    description:
      "Este es mi primer portafolio, una muestra del inicio de mi camino como desarrollador.",
    technologies: [
      "Javascript",
      "React",
      "Express",
      "Nodejs",
      "Tailwind CSS",
      "Dotenv",
      "Git",
      "Twilio",
      "Vercel",
    ],
    icons: ["mobile", "tablet", "desktop", "dark", "translate"],
    liveUrl: "https://www.hectormartil.dev/",
    repoUrl: "https://github.com/hembi12/my-portfolio",
  },
  {
    title: "Invitación de boda",
    description:
      "Muestra a los invitados todos los detalles del evento y les permite confirmar su asistencia.",
    technologies: [
      "Javascript",
      "React",
      "Next.js",
      "Nodejs",
      "Tailwind CSS",
      "Dotenv",
      "Git",
      "Formspree",
      "Vercel",
    ],
    icons: ["mobile", "tablet", "desktop"],
    liveUrl: "https://www.bodahectormichelle.info/",
    repoUrl: "https://github.com/hembi12/wedding",
  },
  {
    title: "Portafolio V2",
    description:
      "Una versión renovada y más profesional de mi portafolio, con mejor estructura, diseño moderno y componentes reutilizables.",
    technologies: [
      "Javascript",
      "React",
      "Vite",
      "Nodejs",
      "Tailwind CSS",
      "Dotenv",
      "Git",
      "Firebase",
      "Vercel",
    ],
    icons: ["mobile", "tablet", "desktop", "dark", "translate"],
    liveUrl: "https://tiendadigital.store",
    repoUrl: "https://github.com/hembi12/portfolio_v2",
  },
  {
    title: "Invitación de cumpleaños",
    description:
      "Muestra a los invitados todos los detalles del evento y les permite confirmar su asistencia.",
    technologies: [
      "Javascript",
      "HTML",
      "CSS",
      "Nodejs",
      "Bootstrap",
      "Dotenv",
      "Git",
      "Firebase",
    ],
    icons: ["mobile", "tablet", "desktop", "dark"],
    liveUrl: "https://tareaspro.com",
    repoUrl: "https://github.com/usuario/tareaspro",
  },
];

export default function Projects() {
  const iconMap = {
    mobile: <MdPhoneIphone title="Responsive móvil" />,
    tablet: <MdTabletMac title="Responsive tablet" />,
    desktop: <FaDesktop title="Responsive desktop" />,
    dark: <MdDarkMode title="Modo oscuro" />,
    translate: <MdTranslate title="Multiidioma" />,
  };

  const techIconMap = {
    React: <SiReact title="React" className="text-cyan-500" />,
    "Tailwind CSS": (
      <SiTailwindcss title="Tailwind CSS" className="text-cyan-400" />
    ),
    Vite: <SiVite title="Vite" className="text-purple-400" />,
    "Next.js": <SiNextdotjs title="Next.js" className="text-white" />,
    Vercel: <SiVercel title="Vercel" className="text-white" />,
    Firebase: <SiFirebase title="Firebase" className="text-amber-400" />,
    Dotenv: <SiDotenv title="Dotenv" className="text-yellow-400" />,
    Twilio: <SiTwilio title="Twilio" className="text-red-500" />,
    Git: <FaGitAlt title="Git" className="text-orange-500" />,
    Javascript: <SiJavascript title="JavaScript" className="text-yellow-400" />,
    Express: <SiExpress title="Express.js" className="text-white" />,
    Nodejs: <FaNodeJs title="Node.js" className="text-green-400" />,
    Github: <SiGithub title="GitHub" className="text-white" />,
    Framer: <SiFramer title="Framer Motion" className="text-white" />,
    Formspree: <SiFormspree title="Formspree" className="text-red-500" />,
    HTML: <FaHtml5 title="HTML" className="text-orange-500" />,
    CSS: <FaCss3Alt title="CSS" className="text-blue-500" />,
    Bootstrap: <FaBootstrap title="Bootstrap" className="text-purple-500" />,
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#1f1f1f] border border-[#2a2a2a] rounded-xl shadow-inner shadow-black/40 ring-1 ring-[#2e2e2e] p-6 flex flex-col justify-between h-full"
        >
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-amber-400 mb-2">
              {project.title}
            </h2>

            <div className="flex gap-3 mb-2 text-neutral-300 text-xl">
              {project.icons?.map((iconKey, i) => (
                <span key={i}>{iconMap[iconKey]}</span>
              ))}
            </div>

            <p className="text-gray-300 text-sm md:text-base mb-4">
              {project.description}
            </p>

            <div className="mb-4">
              <h3 className="font-medium text-sm text-gray-400 mb-1">
                Tecnologías:
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xl text-neutral-200">
                    {techIconMap[tech]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-neutral-100 hover:bg-neutral-300 px-4 py-2 text-sm rounded-xl text-center flex items-center justify-center gap-2"
            >
              <FiExternalLink /> Ver Página
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 border border-neutral-100 hover:bg-neutral-700 px-4 py-2 text-sm rounded-xl text-center flex items-center justify-center gap-2"
            >
              <FiGithub /> Repositorio
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
