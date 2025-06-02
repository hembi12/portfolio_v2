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
  
  export default function TweetCard({ tweet }) {
    const { title, handle, time, description, icons } = tweet;
  
    return (
      <div className="w-[360px] bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-4 shadow-sm space-y-2 relative">
        {/* Icono de tres puntos */}
        <div className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-300 cursor-pointer">
          <FaEllipsisH />
        </div>
  
        {/* Header: perfil, verificado, handle */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-neutral-700 rounded-full" />
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
  
        {/* Texto del tweet */}
        <p className="text-neutral-300 break-words whitespace-normal">
          {description}
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
          <span className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors duration-200">
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