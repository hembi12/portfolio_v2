import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './i18n'; // ⬅️ Importa i18next antes de renderizar App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);