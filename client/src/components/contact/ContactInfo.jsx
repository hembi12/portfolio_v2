// src/components/contact/ContactInfo.jsx
export default function ContactInfo() {
    return (
      <p className="text-sm text-neutral-300 mt-4 mb-4">
        También puedes escribirme directamente a{" "}
        <a
          href="mailto:hectormartilb@gmail.com"
          className="text-amber-400 hover:underline"
        >
          hectormartilb@gmail.com
        </a>
      </p>
    );
  }