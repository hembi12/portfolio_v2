import { useTranslation } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaClock,
  FaHome,
  FaBuilding,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaApple,
} from "react-icons/fa";
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
  SiOpenai,
  SiRender,
  SiI18Next,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

export default function Hero() {
  const { t } = useTranslation();

  const techIcons = [
    { icon: SiReact, label: "React", hoverColor: "hover:text-cyan-400" },
    { icon: SiRender, label: "Render", hoverColor: "hover:text-white" },
    { icon: SiNextdotjs, label: "Next.js", hoverColor: "hover:text-white" },
    { icon: SiVite, label: "Vite", hoverColor: "hover:text-purple-400" },
    { icon: SiTailwindcss, label: "Tailwind", hoverColor: "hover:text-cyan-400" },
    { icon: SiJavascript, label: "JavaScript", hoverColor: "hover:text-yellow-400" },
    { icon: SiFirebase, label: "Firebase", hoverColor: "hover:text-amber-400" },
    { icon: SiExpress, label: "Express", hoverColor: "hover:text-white" },
    { icon: SiFramer, label: "Framer Motion", hoverColor: "hover:text-white" },
    { icon: SiGithub, label: "GitHub", hoverColor: "hover:text-white" },
    { icon: SiDotenv, label: "Dotenv", hoverColor: "hover:text-yellow-400" },
    { icon: SiTwilio, label: "Twilio", hoverColor: "hover:text-red-500" },
    { icon: SiVercel, label: "Vercel", hoverColor: "hover:text-white" },
    { icon: SiFormspree, label: "Formspree", hoverColor: "hover:text-red-500" },
    { icon: FaGitAlt, label: "Git", hoverColor: "hover:text-orange-500" },
    { icon: FaNodeJs, label: "Node.js", hoverColor: "hover:text-green-500" },
    { icon: FaHtml5, label: "HTML", hoverColor: "hover:text-orange-600" },
    { icon: FaCss3Alt, label: "CSS", hoverColor: "hover:text-blue-500" },
    { icon: FaBootstrap, label: "Bootstrap", hoverColor: "hover:text-purple-500" },
    { icon: BiLogoVisualStudio, label: "VS Code", hoverColor: "hover:text-blue-500" },
    { icon: SiOpenai, label: "OpenAI", hoverColor: "hover:text-emerald-500" },
    { icon: FaApple, label: "MacOS", hoverColor: "hover:text-white" },
    { icon: SiI18Next, label: "i18next", hoverColor: "hover:text-green-400" },
  ];

  return (
    <section className="max-w-3xl mx-auto text-center mb-2 px-2">
      <h1 className="text-neutral-100 text-3xl md:text-5xl font-bold mb-4 tracking-tight">
        {t("hero.greeting")} <span className="text-amber-400">Héctor Martil</span>
      </h1>

      <div className="flex flex-wrap justify-center pt-2 gap-2 text-sm">
        <span className="border border-amber-400 text-amber-400  px-3 py-1 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
          <FaMapMarkerAlt className="text-xs" /> {t("hero.location")}
        </span>
        <span className="border border-amber-400 text-amber-400  px-3 py-1 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
          <FaGlobeAmericas className="text-xs" /> {t("hero.country")}
        </span>
        <span className="border border-amber-400 text-amber-400  px-3 py-1 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
          <FaClock className="text-xs" />
          {new Date().toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "America/Mexico_City",
          })}{" "}
          {t("hero.time")}
        </span>
        <span className="border border-amber-400 text-amber-400 px-3 py-1 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
          <FaHome className="text-xs" /> {t("hero.remote")}
        </span>
        <span className="border border-amber-400 text-amber-400  px-3 py-1 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
          <FaBuilding className="text-xs" /> {t("hero.onsite")}
        </span>
      </div>

      <p className="text-neutral-100 text-base md:text-lg leading-relaxed py-6">
        {t("hero.description")}
      </p>

      {/* Marquesina infinita de íconos */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {[...techIcons, ...techIcons].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center group relative mx-2"
              >
                <Icon
                  className={`text-3xl md:text-4xl text-neutral-300 transition-colors ${item.hoverColor}`}
                />
                <span className="text-xs text-neutral-200 opacity-0 group-hover:opacity-100 mt-1 transition-opacity duration-300">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}