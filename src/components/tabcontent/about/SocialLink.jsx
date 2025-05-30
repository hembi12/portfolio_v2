import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialLinks() {
  const links = [
    {
      href: "https://github.com/tuusuario",
      icon: FaGithub,
      username: "hembi12",
    },
    {
      href: "https://linkedin.com/in/hectormartil",
      icon: FaLinkedin,
      username: "hectormartil",
    },
    {
      href: "https://x.com/hembi12",
      icon: FaXTwitter,
      username: "hembi12",
    },
  ];

  return (
    <div className="flex justify-center gap-6 text-neutral-100 text-3xl">
      {links.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.username}
            className="group relative flex flex-col items-center"
          >
            <Icon className="hover:text-amber-400 transition-transform hover:scale-110" />
            <span className="absolute -bottom-6 text-xs text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {item.username}
            </span>
          </a>
        );
      })}
    </div>
  );
}