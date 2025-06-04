import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiEarthAmerica } from "react-icons/gi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function FloatingMenu({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("scroll", handleScroll, true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    setMenuOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative group bg-white dark:bg-amber-400 p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          {/* Tooltip personalizado */}
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-blue-950 text-white opacity-0 group-hover:opacity-100 transition">
            {t("settings")}
          </div>

          <motion.div
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoMdSettings className="w-5 h-5 md:w-6 md:h-6 text-blue-950" />
          </motion.div>
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 right-0 bg-gradient-to-br from-[#0b0e1a] via-[#1a1f2f] to-[#0b0e1a] 
              text-white shadow-lg rounded-xl overflow-hidden w-40 text-center"
            >
              <button
                onClick={toggleTheme}
                className="w-full px-4 py-2 flex justify-center items-center gap-2 hover:bg-amber-400 hover:text-blue-950 transition"
              >
                {darkMode ? (
                  <MdLightMode className="w-4 h-4" />
                ) : (
                  <MdDarkMode className="w-4 h-4" />
                )}
                <span className="text-sm">
                  {darkMode ? t("theme_light") : t("theme_dark")}
                </span>
              </button>
              <button
                onClick={toggleLanguage}
                className="w-full px-4 py-2 flex justify-center items-center gap-2 hover:bg-amber-400 hover:text-blue-950 transition"
              >
                <GiEarthAmerica className="w-4 h-4" />
                <span className="text-sm">
                  {t("language")}: {language.toUpperCase()}
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
