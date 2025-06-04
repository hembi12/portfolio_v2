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
import { projectsData } from "./projectsData";

export default function Projects() {
  const { t } = useTranslation();

  const iconMap = {
    mobile: {
      icon: <MdPhoneIphone />,
      label: t("projects_section.tooltip_mobile"),
    },
    tablet: {
      icon: <MdTabletMac />,
      label: t("projects_section.tooltip_tablet"),
    },
    desktop: {
      icon: <FaDesktop />,
      label: t("projects_section.tooltip_desktop"),
    },
    dark: { icon: <MdDarkMode />, label: t("projects_section.tooltip_dark") },
    translate: {
      icon: <MdTranslate />,
      label: t("projects_section.tooltip_translate"),
    },
  };

  const techIconMap = {
    React: <SiReact title="React" className="text-cyan-500 hover:scale-105" />,
    "Tailwind CSS": (
      <SiTailwindcss
        title="Tailwind CSS"
        className="text-cyan-400 hover:scale-105"
      />
    ),
    Vite: <SiVite title="Vite" className="text-purple-400 hover:scale-105" />,
    "Next.js": (
      <SiNextdotjs title="Next.js" className="text-white hover:scale-105" />
    ),
    Vercel: <SiVercel title="Vercel" className="text-white hover:scale-105" />,
    Firebase: (
      <SiFirebase title="Firebase" className="text-amber-400 hover:scale-105" />
    ),
    Dotenv: (
      <SiDotenv title="Dotenv" className="text-yellow-400 hover:scale-105" />
    ),
    Twilio: (
      <SiTwilio title="Twilio" className="text-red-500 hover:scale-105" />
    ),
    Git: <FaGitAlt title="Git" className="text-orange-500 hover:scale-105" />,
    Javascript: (
      <SiJavascript
        title="JavaScript"
        className="text-yellow-400 hover:scale-105"
      />
    ),
    Express: (
      <SiExpress title="Express.js" className="text-white hover:scale-105" />
    ),
    Nodejs: (
      <FaNodeJs title="Node.js" className="text-green-400 hover:scale-105" />
    ),
    Github: <SiGithub title="GitHub" className="text-white hover:scale-105" />,
    Framer: (
      <SiFramer title="Framer Motion" className="text-white hover:scale-105" />
    ),
    Formspree: (
      <SiFormspree title="Formspree" className="text-red-500 hover:scale-105" />
    ),
    HTML: <FaHtml5 title="HTML" className="text-orange-500 hover:scale-105" />,
    CSS: <FaCss3Alt title="CSS" className="text-blue-500 hover:scale-105" />,
    Bootstrap: (
      <FaBootstrap
        title="Bootstrap"
        className="text-purple-500 hover:scale-105"
      />
    ),
    Render: <SiRender title="Render" className="text-white hover:scale-105" />,
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projectsData(t).map((project, idx) => (
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

            <div className="flex gap-4 mb-4 text-neutral-300">
              {project.icons?.map((key, i) => (
                <div
                  key={i}
                  className="relative group flex flex-col items-center"
                >
                  <span className="text-xl">{iconMap[key].icon}</span>
                  <span
                    className="absolute top-full mt-1 px-2 py-1 text-xs text-white bg-blue-950 rounded-md opacity-0 group-hover:opacity-100 transition 
        whitespace-nowrap z-10"
                  >
                    {iconMap[key].label}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-neutral-200 text-sm md:text-base mb-4">
              {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xl">
                  {techIconMap[tech]}
                </span>
              ))}
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
