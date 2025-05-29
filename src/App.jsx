import { useState } from "react";
import { Briefcase, User, Target, Mail, Layers } from "lucide-react"; // ✅ se añadió Layers
import Hero from "./components/hero/Hero";
import Tabs from "./components/tabs/Tabs";
import TabContent from "./components/TabContent";

export default function App() {
  const [tab, setTab] = useState("proyectos");
  const [tooltip, setTooltip] = useState("");

  const tabs = [
    { id: "proyectos", label: "Proyectos", icon: Briefcase },
    { id: "sobremi", label: "Sobre mí", icon: User },
    { id: "trayectoria", label: "Trayectoria", icon: Layers }, // ✅ nuevo tab
    { id: "objetivo", label: "Objetivo", icon: Target },
    { id: "contacto", label: "Contacto", icon: Mail },
  ];

  const showTooltip = (id) => {
    setTooltip(id);
    setTimeout(() => setTooltip(""), 2000);
  };

  return (
    <main className="min-h-screen bg-black font-sans px-4 md:px-8 py-12 relative">
      <Hero />
      <Tabs
        tabs={tabs}
        tab={tab}
        setTab={setTab}
        showTooltip={showTooltip}
        tooltip={tooltip}
      />
      <section className="max-w-2xl mx-auto px-2">
        <TabContent tab={tab} />
      </section>
    </main>
  );
}