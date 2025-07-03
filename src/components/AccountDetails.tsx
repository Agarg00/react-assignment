import { Mail, Phone, MessageSquare, Calendar, Plus, Save } from "lucide-react";
import clsx from "clsx";

export default function AccountDetails() {
  return (
    <div className="pt-4 rounded-xl bg-transparent shadow-sm">
      <div className="flex lg:flex-col sm:flex-row flex-col lg:gap-0 sm:gap-3">
        {/* Profile Section */}
        <div className="flex flex-1 items-center space-x-4 mb-6 bg-white dark:bg-secondary-dark dark:border-border-dark border rounded-2xl p-4">
          <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">TG</span>
            <span className="rounded-full w-3 h-3 absolute top-0 right-0 bg-green-500 translate-x-[1px] translate-y-1 border-2 border-white" />
            <span className="absolute bottom-0 text-[10px] text-white w-10 text-center bg-purple-200/40 rounded-b-full">
              Edit
            </span>
            <input
              className="opacity-0 w-full h-full absolute top-0 left-0"
              type="file"
              accept="image/*"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center space-x-2">
                <h3
                  className={`font-semibold text-light-text-secondary dark:text-white`}
                >
                  Truck Gear
                </h3>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                  BUSINESS
                </span>
              </div>
              <button className="text-primary text-sm hover:text-purple-700">
                Change Status
              </button>
            </div>

            <p
              className={`text-sm dark:text-gray-400 text-light-text-secondary
              } mt-1`}
            >
              jillali@onechanneladmin.com
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex-1 grid grid-cols-4 gap-2 mb-6 p-4 border rounded-2xl bg-white dark:bg-secondary-dark dark:border-border-dark">
          <button
            className={`p-3 rounded-lg transition-colors flex flex-col items-center space-y-1`}
          >
            <Mail
              className={`w-4 h-4 dark:text-gray-400 text-light-text-secondary
              }`}
            />
            <span className="text-xs dark:text-gray-400 text-light-text-secondary">
              Email
            </span>
          </button>
          <button
            className={`p-3 rounded-lg transition-colors flex flex-col items-center space-y-1`}
          >
            <Phone
              className={`w-4 h-4 dark:text-gray-400 text-light-text-secondary
              }`}
            />
            <span
              className={`text-xs dark:text-gray-400 text-light-text-secondary
              }`}
            >
              Call
            </span>
          </button>
          <button
            className={`p-3 rounded-lg transition-colors flex flex-col items-center space-y-1`}
          >
            <MessageSquare
              className={`w-4 h-4 dark:text-gray-400 text-light-text-secondary
              }`}
            />
            <span
              className={`text-xs dark:text-gray-400 text-light-text-secondary
              }`}
            >
              Message
            </span>
          </button>
          <button
            className={`p-3 rounded-lg transition-colors flex flex-col items-center space-y-1`}
          >
            <Calendar
              className={`w-4 h-4 dark:text-gray-400 text-light-text-secondary
              }`}
            />
            <span
              className={`text-xs dark:text-gray-400 text-light-text-secondary
              }`}
            >
              Calendar
            </span>
          </button>
        </div>
      </div>

      {/* Business Details */}
      <div className="mb-6 p-4 border rounded-2xl bg-white dark:bg-secondary-dark dark:border-border-dark">
        <div className="flex items-center justify-between mb-4">
          <h4
            className={`font-semibold text-light-text-secondary dark:text-white`}
          >
            Business Details
          </h4>
          <div className="flex items-center space-x-1 text-green-600 text-sm ">
            <Save className="size-4 mb-0.5" />
            <span className="font-medium">Save & Close</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-light-text-secondary dark:text-white">
              Account Name
            </label>
            <input
              type="text"
              value="TRUCK GEAR"
              className="w-full px-3 py-2 rounded-lg border bg-white border-border-light dark:border-border-dark text-light-text-secondary focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-light-text-secondary dark:text-white">
              Email
            </label>
            <input
              type="email"
              value="Jillali@Onechanneladmin.Com"
              className="w-full px-3 py-2 rounded-lg border bg-white border-border-light dark:border-border-dark text-light-text-secondary focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              readOnly
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                className={`block text-sm font-medium text-light-text-secondary dark:text-gray-200`}
              >
                Phone Number
              </label>
              <button
                className={`flex items-center space-x-1 text-primary text-sm font-medium hover:text-purple-700`}
              >
                <Plus className="" />
              </button>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-4 items-center space-x-2">
                <select
                  className={`px-3 py-2 rounded-xl border bg-white border-border-light dark:border-border-dark text-light-text-secondary focus:outline-none focus:ring-2 focus:ring-purple-500`}
                >
                  <option>🇺🇸 US</option>
                </select>
                <input
                  type="tel"
                  value="+1 344 434 4455"
                  className={`flex-1 col-span-2 px-3 py-2 rounded-xl border bg-white border-border-light dark:border-border-dark text-light-text-secondary focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  readOnly
                />
                <button
                  className={clsx(
                    "px-3 py-2 text-red-600 border rounded-xl text-sm font-medium hover:text-red-700 bg-white border-border-light dark:border-border-dark text-light-text-secondary"
                  )}
                >
                  Remove
                </button>
              </div>
              <div className="grid grid-cols-4 items-center space-x-2">
                <select
                  className={`px-3 py-2 rounded-xl border bg-white border-border-light dark:border-border-dark text-light-text-secondary focus:outline-none focus:ring-2 focus:ring-purple-500`}
                >
                  <option>🇺🇸 US</option>
                </select>
                <input
                  type="tel"
                  value="+1 344 434 4455"
                  className={`flex-1 col-span-2 px-3 py-2 rounded-xl border bg-white border-border-light dark:border-border-dark text-light-text-secondary focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  readOnly
                />
                <button
                  className={clsx(
                    "px-3 py-2 text-red-600 border rounded-xl text-sm font-medium hover:text-red-700 bg-white border-border-light dark:border-border-dark text-light-text-secondary"
                  )}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-light-text-secondary dark:text-white mb-2">
              Contact Owner
            </label>
            <select
              className={`w-full px-3 py-2 rounded-lg border bg-white border-border-light dark:border-border-dark text-light-text-secondary focus:outline-none focus:ring-2 focus:ring-purple-500`}
            >
              <option>Suchithkumar@Onechanneladmin.Com</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
