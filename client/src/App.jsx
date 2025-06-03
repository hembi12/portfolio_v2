import { useState, useEffect } from "react";
import { Briefcase, User, Mail, Layers } from "lucide-react";
import { FaSitemap } from "react-icons/fa";
import Hero from "./components/hero/Hero";
import Tabs from "./components/tabs/Tabs";
import TabContent from "./components/TabContent";
import FloatingMenu from "./components/FloatingMenu";
import { useTranslation } from "react-i18next";

export default function App() {
  const [tab, setTab] = useState("proyectos");
  const [tooltip, setTooltip] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? stored === "true" : true;
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "es";
  });

  const { t } = useTranslation();

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const tabs = [
    { id: "proyectos", label: t("tabs.projects"), icon: Briefcase },
    { id: "sobremi", label: t("tabs.about_me"), icon: User },
    { id: "trayectoria", label: t("tabs.career"), icon: Layers },
    { id: "objetivo", label: t("tabs.objective"), icon: FaSitemap },
    { id: "contacto", label: t("tabs.contact"), icon: Mail },
  ];

  const showTooltip = (id) => {
    setTooltip(id);
    setTimeout(() => setTooltip(""), 2000);
  };

  return (
    <main
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-b from-[#000c2a] via-[#011c4f] to-[#012169]"
          : "bg-gradient-to-b from-[#3b53a3] via-[#2a3d7a] to-[#1a2750]"
      } font-sans px-4 md:px-8 py-12 relative transition-all`}
    >
      <Hero />
      <Tabs
        tabs={tabs}
        tab={tab}
        setTab={setTab}
        showTooltip={showTooltip}
        tooltip={tooltip}
      />
      <section className="max-w-2xl mx-auto px-2">
        <TabContent tab={tab} />
      </section>

      <FloatingMenu
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
    </main>
  );
}