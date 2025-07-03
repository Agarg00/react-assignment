interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  "Dashboard",
  "Teams",
  "Metrics",
  "Tools",
  "Data",
  "Contacts",
  "Chat History",
];

export default function Navigation({
  activeTab,
  setActiveTab,
}: Readonly<NavigationProps>) {
  return (
    <nav className="bg-transparent dark:border-gray-700 border-gray-200">
      <div className="flex space-x-4 lg:space-x-8 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-3 md:px-5 rounded-t-xl text-sm font-medium border border-border-light dark:border-border-dark border-b-0  whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "bg-white dark:bg-secondary-dark text-primary "
                : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
}
