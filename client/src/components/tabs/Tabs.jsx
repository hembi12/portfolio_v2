export default function Tabs({ tabs, tab, setTab, tooltip, showTooltip }) {
    return (
      <nav className="flex justify-center items-center gap-6 border-b border-neutral-400 pb-4 mb-8 flex-wrap sm:flex-nowrap">
        {tabs.map((tabItem) => (
          <div key={tabItem.id} className="relative group">
            <button
              onClick={() => {
                setTab(tabItem.id);
                showTooltip(tabItem.id);
              }}
              className={`flex items-center gap-2 px-3 py-2 text-sm transition border-b-2 ${
                tab === tabItem.id
                  ? "border-amber-400 text-amber-400"
                  : "border-transparent text-neutral-200 hover:text-amber-400"
              }`}
            >
              <tabItem.icon size={18} />
              <span className="hidden sm:inline">{tabItem.label}</span>
            </button>
  
            {/* Tooltip solo en móvil */}
            <div
              className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 text-xs bg-blue-950 text-neutral-100 px-2 py-1 rounded shadow-md transition-opacity duration-200 whitespace-nowrap sm:hidden ${
                tooltip === tabItem.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-blue-950"></div>
              {tabItem.label}
            </div>
          </div>
        ))}
      </nav>
    );
  }