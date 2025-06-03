import { useTranslation } from "react-i18next";
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
  SiRender,
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

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects_section.title_v1"),
      description: t("projects_section.desc_v1"),
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
      title: t("projects_section.title_wedding"),
      description: t("projects_section.desc_wedding"),
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
      title: t("projects_section.title_v2"),
      description: t("projects_section.desc_v2"),
      technologies: [
        "Javascript",
        "React",
        "Vite",
        "Nodejs",
        "Tailwind CSS",
        "Dotenv",
        "Git",
        "Render",
        "Vercel",
      ],
      icons: ["mobile", "tablet", "desktop", "dark", "translate"],
      liveUrl: "https://tiendadigital.store",
      repoUrl: "https://github.com/hembi12/portfolio_v2",
    },
    {
      title: t("projects_section.title_birthday"),
      description: t("projects_section.desc_birthday"),
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
    Render: <SiRender title="Render" className="text-white" />,
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-[#0b0e1a] via-[#1a1f2f] to-[#0b0e1a] 
          border border-[#1a2a4a] 
          rounded-3xl 
          shadow-xl shadow-black/30 
          transition duration-300
          hover:scale-105 
          p-6 
          flex flex-col justify-between h-full text-white"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-amber-400 mb-2">
              {project.title}
            </h2>

            <div className="flex gap-3 mb-2 text-neutral-300 text-xl">
              {project.icons?.map((iconKey, i) => (
                <span key={i}>{iconMap[iconKey]}</span>
              ))}
            </div>

            <p className="text-neutral-200 text-sm md:text-base mb-4">
              {project.description}
            </p>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xl">
                    {techIconMap[tech]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-neutral-100 hover:text-blue-950 hover:bg-amber-400 px-4 py-2 text-sm rounded-xl text-center flex items-center justify-center gap-2"
            >
              <FiExternalLink /> {t("projects_section.view_page")}
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 border border-neutral-100 hover:bg-amber-400 hover:border-amber-400 hover:text-blue-950 px-4 py-2 text-sm rounded-xl text-center flex items-center justify-center gap-2"
            >
              <FiGithub /> {t("projects_section.repository")}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}