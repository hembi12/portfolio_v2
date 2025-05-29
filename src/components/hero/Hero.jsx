import { FaMapMarkerAlt, FaGlobeAmericas, FaClock, FaHome, FaBuilding } from "react-icons/fa";
export default function Hero() {
    return (
      <section className="max-w-3xl mx-auto text-center mb-12 px-2">
        <h1 className="text-neutral-100 text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Hola, soy <span className="text-amber-400">Héctor Martil</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-2 mb-4 text-sm">
          <span className="bg-neutral-700 text-neutral-100 px-3 py-1 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
            <FaMapMarkerAlt className="text-xs" /> CDMX
          </span>
          <span className="bg-neutral-700 text-neutral-100 px-3 py-1 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
            <FaGlobeAmericas className="text-xs" /> México
          </span>
          {<span className="bg-neutral-700 text-neutral-100 px-3 py-1 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
            <FaClock className="text-xs" />{" "}
            {new Date().toLocaleTimeString("es-MX", {
              hour: "2-digit",
              minute: "2-digit",
              timeZone: "America/Mexico_City",
            })}{" "}
            (UTC-6)
          </span>}
          <span className="bg-neutral-700 text-neutral-100 px-3 py-1 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
            <FaHome className="text-xs" /> Remoto
          </span>
          <span className="bg-neutral-700 text-neutral-100 px-3 py-1 rounded-full flex items-center gap-2 transition-transform hover:scale-105">
            <FaBuilding className="text-xs" /> Presencial
          </span>
        </div>
        <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
          Diseño experiencias digitales limpias, rápidas y centradas en el usuario.
        </p>
      </section>
    );
  }