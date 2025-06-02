// src/components/contact/ContactForm.jsx
import { FiSend } from "react-icons/fi";

export default function ContactForm({ loading, sendEmail }) {
  return (
    <form onSubmit={sendEmail} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-neutral-300">
          Nombre:
        </label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full mt-1 text-white border border-neutral-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-500"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-300">
          Email:
        </label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full mt-1 text-white border border-neutral-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-500"
          placeholder="tucorreo@ejemplo.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-300">
          Asunto:
        </label>
        <select
          name="user_subject"
          required
          className="w-full mt-1 border border-neutral-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 text-neutral-100"
          defaultValue=""
        >
          <option value="" disabled>
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
          name="message"
          rows="4"
          required
          className="w-full mt-1 text-white border border-neutral-500 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-500"
          placeholder="Escribe tu mensaje..."
        ></textarea>
      </div>
      <div className="flex items-start gap-2 text-sm text-neutral-300">
        <input type="checkbox" id="privacy" required className="mt-1" />
        <label htmlFor="privacy">
          Acepto la{" "}
          <a
            href="/politica-privacidad.html"
            target="_blank"
            className="text-amber-400 hover:underline"
          >
            política de privacidad
          </a>
        </label>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`bg-neutral-100 text-neutral-900 text-sm px-4 py-2 rounded-md hover:bg-neutral-300 transition flex items-center gap-2 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <FiSend /> {loading ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
