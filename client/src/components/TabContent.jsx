import Projects from "./tabcontent/Projects";
import AboutMe from "./tabcontent/about/AboutMe";
import Objective from "./tabcontent/Objective";
import Contact from "./contact/Contact";
import Path from "./tabcontent/path/Path";

export default function TabContent({ tab }) {
  switch (tab) {
    case "proyectos":
      return <Projects />;
    case "sobremi":
      return <AboutMe />;
    case "trayectoria":
      return <Path />;
    case "objetivo":
      return <Objective />;
    case "contacto":
      return <Contact />;
    default:
      return null;
  }
}