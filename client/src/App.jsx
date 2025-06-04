import { useState, useEffect } from "react";
import { Briefcase, User, Mail, Layers } from "lucide-react";
import { GoGoal } from "react-icons/go";
import Hero from "./components/hero/Hero";
import Tabs from "./components/tabs/Tabs";
import TabContent from "./components/TabContent";
import FloatingMenu from "./components/FloatingMenu";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

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

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const tabs = [
    { id: "proyectos", label: t("tabs.projects"), icon: Briefcase },
    { id: "sobremi", label: t("tabs.about_me"), icon: User },
    { id: "trayectoria", label: t("tabs.career"), icon: Layers },
    { id: "objetivo", label: t("tabs.objective"), icon: GoGoal },
    { id: "contacto", label: t("tabs.contact"), icon: Mail },
  ];

  const showTooltip = (id) => {
    setTooltip(id);
    setTimeout(() => setTooltip(""), 2000);
  };

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
        <meta name="keywords" content={t("seo.keywords")} />
        <meta name="author" content="Héctor Martil" />

        <meta property="og:title" content={t("seo.og_title")} />
        <meta property="og:description" content={t("seo.og_description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusitio.com/" />
        <meta property="og:image" content="/preview.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("seo.twitter_title")} />
        <meta name="twitter:description" content={t("seo.twitter_description")} />
        <meta name="twitter:image" content="/preview.png" />
      </Helmet>

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
    </>
  );
}