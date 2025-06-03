import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function ContactForm({ loading, sendEmail }) {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <>
      <form onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-300">
            Nombre:
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full mt-1 text-white border border-neutral-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-400"
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
            className="w-full mt-1 text-white border border-neutral-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-400"
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
            className="w-full mt-1 border border-neutral-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 text-neutral-100"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona un asunto
            </option>
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
            className="w-full mt-1 text-white border border-neutral-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder-neutral-400"
            placeholder="Escribe tu mensaje..."
          ></textarea>
        </div>
        <div className="flex items-start gap-2 text-sm text-neutral-300">
          <input type="checkbox" id="privacy" required className="mt-1" />
          <label htmlFor="privacy">
            Acepto la{" "}
            <button
              type="button"
              onClick={() => setShowPrivacyModal(true)}
              className="text-amber-400 hover:underline"
            >
              política de privacidad
            </button>
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`bg-neutral-100 text-neutral-900 text-sm px-4 py-2 rounded-md hover:bg-amber-400 transition flex items-center gap-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FiSend /> {loading ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>

      {showPrivacyModal && (
        <PrivacyModal onClose={() => setShowPrivacyModal(false)} />
      )}
    </>
  );
}

function PrivacyModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-gradient-to-b from-[#000c2a] via-[#011c4f] to-[#012169] text-neutral-200 border border-neutral-600 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <h1 className="text-2xl font-bold text-amber-400 mb-2">
          Política de Privacidad
        </h1>
        <p className="mb-4 text-sm">
          <strong>Última actualización:</strong> 30 de mayo de 2025
        </p>

        <h2 className="text-lg text-amber-400 font-semibold mt-4">
          1. Información que se recopila
        </h2>
        <p>
          Cuando utilizas el formulario de contacto de este sitio web, se pueden
          recopilar los siguientes datos personales:
        </p>
        <ul className="list-disc ml-5 mt-1">
          <li>Nombre completo</li>
          <li>Dirección de correo electrónico</li>
          <li>Asunto y contenido del mensaje</li>
          <li>Dirección IP (automáticamente por el servidor)</li>
        </ul>

        <h2 className="text-lg text-amber-400 font-semibold mt-4">
          2. Finalidad del tratamiento
        </h2>
        <p>Los datos recopilados se utilizan exclusivamente para:</p>
        <ul className="list-disc ml-5 mt-1">
          <li>Responder a consultas o solicitudes</li>
          <li>
            Dar seguimiento a posibles colaboraciones, oportunidades laborales o
            propuestas de contacto
          </li>
        </ul>
        <p>
          No se utilizarán con fines publicitarios ni se compartirán con
          terceros sin tu consentimiento explícito.
        </p>

        <h2 className="text-lg text-amber-400 font-semibold mt-4">
          3. Protección de la información
        </h2>
        <p>
          Este sitio utiliza medidas técnicas y organizativas adecuadas para
          proteger tus datos personales. La comunicación está cifrada mediante
          TLS (HTTPS).
        </p>

        <h2 className="text-lg text-amber-400 font-semibold mt-4">
          4. Derechos del usuario
        </h2>
        <p>Tienes derecho a:</p>
        <ul className="list-disc ml-5 mt-1">
          <li>Acceder a tus datos personales</li>
          <li>Solicitar su rectificación o eliminación</li>
          <li>Oponerte al tratamiento de tus datos</li>
          <li>Solicitar la portabilidad de tus datos</li>
        </ul>
        <p>
          Puedes ejercer estos derechos contactando directamente al correo
          electrónico indicado abajo.
        </p>

        <h2 className="text-lg text-amber-400 font-semibold mt-4">
          5. Conservación de los datos
        </h2>
        <p>
          Los datos se conservarán solo el tiempo necesario para cumplir su
          finalidad, luego serán eliminados de forma segura.
        </p>

        <h2 className="text-lg text-amber-400 font-semibold mt-4">
          6. Enlaces externos
        </h2>
        <p>
          Este sitio puede contener enlaces a otros sitios. No somos
          responsables por sus políticas de privacidad ni por su contenido.
        </p>

        <h2 className="text-lg text-amber-400 font-semibold mt-4">
          7. Contacto
        </h2>
        <p>Para dudas o ejercer tus derechos, puedes escribir a:</p>
        <p>
          <a
            href="mailto:hectormartilb@gmail.com"
            className="text-amber-400 hover:underline"
          >
            hectormartilb@gmail.com
          </a>
        </p>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="mt-4 bg-neutral-100 text-neutral-900 text-sm px-4 py-2 rounded-md hover:bg-amber-400 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
