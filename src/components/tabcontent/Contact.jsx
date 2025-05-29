import { FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto bg-black border border-neutral-500 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-amber-400 mb-4">
        ¿Buscamos trabajar juntos?
      </h2>
      <p className="text-gray-300 mb-6">
        Estoy abierto a nuevas oportunidades laborales, proyectos freelance o
        colaboraciones interesantes. Si tienes una propuesta, no dudes en
        escribirme.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-300">
            Nombre:
          </label>
          <input
            type="text"
            className="w-full mt-1 border border-neutral-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-500"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-300">
            Email:
          </label>
          <input
            type="email"
            className="w-full mt-1 border border-neutral-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-500"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-300">
            Asunto:
          </label>
          <select
            className="w-full mt-1 border border-neutral-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 text-neutral-100"
            defaultValue=""
          >
            <option value="" disabled className="">
              Selecciona un asunto
            </option>
            <option value="freelance">Trabajo freelance</option>
            <option value="empleo">Oferta laboral</option>
            <option value="colaboracion">Colaboración</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-300">
            Mensaje:
          </label>
          <textarea
            rows="4"
            className="w-full mt-1 border border-neutral-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-500"
            placeholder="Escribe tu mensaje..."
          ></textarea>
        </div>
        <div className="flex items-start gap-2 text-sm text-neutral-300">
          <input type="checkbox" id="privacy" required className="mt-1" />
          <label htmlFor="privacy">
            Acepto la{" "}
            <a
              href="/politica-privacidad"
              target="_blank"
              className="text-amber-400 hover:underline"
            >
              política de privacidad
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="bg-neutral-100 text-neutral-900 text-sm px-4 py-2 rounded-md hover:bg-neutral-300 transition flex items-center gap-2"
        >
          <FiSend /> Enviar mensaje
        </button>
      </form>
      <p className="text-sm text-neutral-300 mt-4 mb-4">
        También puedes escribirme directamente a{" "}
        <a
          href="mailto:correo@ejemplo.com"
          className="text-amber-400 hover:underline"
        >
          correo@ejemplo.com
        </a>
      </p>
    </div>
  );
}
