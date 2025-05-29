// src/tabcontent/AboutMe.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image1 from "../../assets/Image1.svg";

const projects = [
  {
    title: "Mi Web Personal",
    description: "Portafolio en línea con mi experiencia, proyectos y contacto.",
  },
  {
    title: "Blog Técnico",
    description: "Blog donde comparto artículos sobre desarrollo web moderno.",
  },
  {
    title: "Tienda en Línea",
    description: "E-commerce de productos digitales con pasarela de pagos.",
  },
  {
    title: "Gestor de Tareas",
    description: "App para organizar tareas diarias con autenticación.",
  },
];

export default function AboutMe() {
  return (
    <div className="max-w-2xl mx-auto text-gray-700">
      {/* Redes sociales */}
      <div className="flex justify-center gap-6 text-neutral-100 text-3xl mb-6">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-amber-400 hover:scale-110 transform transition-transform" />
        </a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-amber-400 hover:scale-110 transform transition-transform" />
        </a>
        <a href="https://x.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="hover:text-amber-400 hover:scale-110 transform transition-transform" />
        </a>
      </div>

      {/* Proyectos */}
      <div className="grid gap-6 md:grid-cols-2 mb-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-black border border-neutral-500 rounded-xl shadow-md p-6 flex flex-col justify-between h-full"
          >
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-amber-400 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base mb-4">
                {project.description}
              </p>
              <img
                src={Image1}
                alt="Ilustración del proyecto"
                className="w-full max-h-52 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}