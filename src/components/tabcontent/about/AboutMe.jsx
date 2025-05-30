import { useState } from "react";
import SocialLinks from "../about/SocialLink";
import TweetCard from "../about/TweetCard";
import tweets from "../about/tweetsData"; // Ajusta la ruta si está en otro lugar

export default function AboutMe() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="max-w-full overflow-hidden space-y-6">
      <SocialLinks />

      {/* Carrusel normal con máscara */}
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

      {/* Carrusel reverso con máscara */}
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
    </div>
  );
}
