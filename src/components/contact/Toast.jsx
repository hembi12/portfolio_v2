// src/components/contact/Toast.jsx
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Toast({ message, type = "success" }) {
  const isSuccess = type === "success";

  return (
    <div
      className={`fixed top-4 inset-x-4 sm:right-4 sm:inset-x-auto max-w-sm mx-auto sm:mx-0
        ${isSuccess ? "bg-neutral-900 border-green-500" : "bg-neutral-900 border-red-500"}
        text-sm px-4 py-3 rounded-xl shadow-2xl z-50 transition-all duration-300 animate-slide-fade-in border`}
    >
      <div className="flex items-center gap-3">
        {isSuccess ? (
          <FaCheckCircle className="text-green-400 text-xl" />
        ) : (
          <FaExclamationCircle className="text-red-400 text-xl" />
        )}
        <span className={`font-medium ${isSuccess ? "text-white" : "text-red-300"}`}>
          {message}
        </span>
      </div>
    </div>
  );
}