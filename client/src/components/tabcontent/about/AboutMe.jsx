import { useState } from "react";
import { useTranslation } from "react-i18next";
import SocialLinks from "../about/SocialLink";
import TweetCard from "../about/TweetCard";
import tweets from "./tweetsData";

export default function AboutMe() {
  const [paused, setPaused] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const sectionId = lang === "es" ? "sobremi" : "about";

  return (
    <section id={sectionId} className="max-w-full overflow-hidden space-y-6">
      {/* Redes sociales */}
      <SocialLinks />

      {/* Carrusel normal */}
      <div className="marquee-wrapper">
        <div
          className={`flex w-max gap-4 py-4 auto-scroll ${
            paused ? "paused" : ""
          }`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {[...tweets, ...tweets].map((tweet, idx) => (
            <div key={`forward-${idx}`} className="flex-shrink-0">
              <TweetCard tweet={tweet} />
            </div>
          ))}
        </div>
      </div>

      {/* Carrusel en reversa */}
      <div className="marquee-wrapper">
        <div
          className={`flex w-max gap-4 py-4 auto-scroll-reverse ${
            paused ? "paused" : ""
          }`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {[...tweets, ...tweets].map((tweet, idx) => (
            <div key={`reverse-${idx}`} className="flex-shrink-0">
              <TweetCard tweet={tweet} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}