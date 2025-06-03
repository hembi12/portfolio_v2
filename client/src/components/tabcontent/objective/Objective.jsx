import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { roadmap } from "../objective/objectiveData";

export default function ObjectiveKanban() {
  const [expanded, setExpanded] = useState(false);

  const toggleAll = () => setExpanded((prev) => !prev);

  return (
    <section className="w-full max-w-6xl mx-auto px-4">
      <p className="text-center text-sm sm:text-base text-neutral-300 max-w-3xl mx-auto mb-10">
        A continuación, comparto una visión estructurada de mi camino como
        desarrollador. Incluye lo que ya he consolidado, los módulos que
        actualmente estoy cursando en un bootcamp full stack, y los objetivos
        que planeo alcanzar a corto y mediano plazo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roadmap.map((card, idx) => {
          const visibleHighlights = expanded
            ? card.highlights
            : card.highlights.slice(0, 3);
          const hiddenHighlights = card.highlights.slice(3);

          return (
            <div
              key={idx}
              className={`w-full rounded-2xl border ${
                idx === 1
                  ? "bg-gradient-to-br from-[#1b223a] via-[#2a3755] to-[#1b223a] border-2 border-amber-400 shadow-xl transition duration-300 hover:scale-105"
                  : "bg-gradient-to-br from-[#0b0e1a] via-[#1a1f2f] to-[#0b0e1a] border border-[#1a2a4a] rounded-2xl shadow-xl shadow-black/30 transition duration-300 hover:scale-105"
              } p-6 flex flex-col justify-between transition-transform`}
            >
              <div>
                <h3 className="text-xl font-bold text-amber-400 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-300 mb-6">
                  {card.description}
                </p>

                <ul className="space-y-3">
                  {card.highlights.slice(0, 3).map((item, i) => (
                    <li key={i} className="text-sm text-white flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {item}
                    </li>
                  ))}

                  <AnimatePresence>
                    {expanded &&
                      hiddenHighlights.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-white flex items-start overflow-hidden"
                        >
                          <span className="text-green-400 mr-2">✓</span>
                          {item}
                        </motion.li>
                      ))}
                  </AnimatePresence>
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enlace único debajo del grid */}
      <div
        onClick={toggleAll}
        className="mt-8 flex items-center justify-center gap-1 text-md text-amber-400 font-medium hover:underline cursor-pointer"
      >
        {expanded ? "Ver menos" : "Ver más"}
        {expanded ? (
          <FiChevronUp className="text-base" />
        ) : (
          <FiChevronDown className="text-base" />
        )}
      </div>
    </section>
  );
}