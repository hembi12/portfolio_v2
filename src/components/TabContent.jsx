import Projects from "./tabcontent/Projects";
import AboutMe from "./tabcontent/AboutMe";
import Objective from "./tabcontent/Objective";
import Contact from "./tabcontent/Contact";
import Path from "./tabcontent/Path"; // ✅ nuevo import

export default function TabContent({ tab }) {
  switch (tab) {
    case "proyectos":
      return <Projects />;
    case "sobremi":
      return <AboutMe />;
    case "trayectoria": // ✅ nueva opción
      return <Path />;
    case "objetivo":
      return <Objective />;
    case "contacto":
      return <Contact />;
    default:
      return null;
  }
}