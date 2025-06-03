import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaChartBar,
  FaRegBookmark,
  FaShare,
  FaEllipsisH,
} from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
import ProfileLego from "../../../assets/Profile_Lego.png";

export default function TweetCard({ tweet }) {
  const { t } = useTranslation();
  const { title, handle, time, descriptionKey, icons } = tweet;

  return (
    <div
      className="w-[360px] bg-gradient-to-br from-[#0b0e1a] via-[#1a1f2f] to-[#0b0e1a] 
        border border-[#1a2a4a] 
        rounded-2xl 
        shadow-xl shadow-black/30 p-4 space-y-2 relative"
    >
      {/* Icono de tres puntos */}
      <div className="absolute top-4 right-4 text-neutral-400 hover:text-sky-500 cursor-pointer">
        <FaEllipsisH />
      </div>

      {/* Header: imagen perfil, nombre, verificado, handle */}
      <div className="flex items-center space-x-2">
        <img
          src={ProfileLego}
          alt="Perfil"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-1 text-neutral-300 font-bold">
            {title}
            <HiCheckBadge className="text-amber-400 text-sm" />
          </div>
          <div className="text-sm text-neutral-400">
            {handle} · {time}
          </div>
        </div>
      </div>

      {/* Texto del tweet traducido */}
      <p className="text-neutral-200 break-words whitespace-normal">
        {t(descriptionKey)}
      </p>

      {/* Reacciones */}
      <div className="flex justify-between text-neutral-300 text-sm pt-2 px-2">
        <span className="flex items-center gap-2 hover:text-sky-500 cursor-pointer transition-colors duration-200">
          <FaRegComment className="text-lg" /> {icons.comments}
        </span>
        <span className="flex items-center gap-2 hover:text-green-500 cursor-pointer transition-colors duration-200">
          <FaRetweet className="text-lg" /> {icons.retweets}
        </span>
        <span className="flex items-center gap-2 hover:text-red-500 cursor-pointer transition-colors duration-200">
          <FaRegHeart className="text-lg" /> {icons.likes}
        </span>
        <span className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition-colors duration-200">
          <FaChartBar className="text-lg" /> {icons.views}
        </span>
        <span className="flex items-center gap-2 hover:text-amber-400 cursor-pointer transition-colors duration-200">
          <FaRegBookmark className="text-lg" />
        </span>
        <span className="flex items-center gap-2 hover:text-emerald-500 cursor-pointer transition-colors duration-200">
          <FaShare className="text-lg" />
        </span>
      </div>
    </div>
  );
}