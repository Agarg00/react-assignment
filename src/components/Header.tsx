import { Search, Bell, Moon, Sun, Menu, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="dark:bg-secondary-dark dark:border-border-dark bg-white border-b border-border-light p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center lg:space-x-8">
          <div className="items-center space-x-2 lg:flex hidden">
            <img src="/logo.svg" alt="logo" className="dark:hidden" />
            <img src="/logo-dark.svg" alt="logo" className="hidden dark:block" />
          </div>
          <Menu className="w-5 h-5 lg:hidden dark:text-gray-400 text-gray-600" />
        </div>

        <div className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 dark:text-gray-400 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-1.5 rounded-xl border dark:bg-dark dark:border-border-dark dark:text-white dark:placeholder-gray-400 bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-x-2 lg:gap-x-4">
          <button className="md:hidden p-2 rounded-lg"></button>

          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className="p-2 rounded-lg dark:hover:bg-dark hover:bg-gray-100 transition-colors"
          >
            <Sun className="dark:block hidden w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
            <Moon className="dark:hidden block w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
          </button>

          <button className="p-2 rounded-lg shadow-md border dark:bg-dark dark:border-border-dark dark:hover:bg-dark hover:bg-gray-100 transition-colors">
            <Bell className="w-4 h-4 lg:w-5 lg:h-5 dark:text-gray-400 text-gray-600 " />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-xs lg:text-sm font-medium">
                MW
              </span>
            </div>
            <div className="block">
              <p className="text-sm font-medium dark:text-whitetext-gray-900">
                Maria Wilson
              </p>
              <p className="text-xs dark:text-gray-400 text-gray-500">
                maria@quotient.com
              </p>
            </div>
            <div>
              <ChevronDown className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
