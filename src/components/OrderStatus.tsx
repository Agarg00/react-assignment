import { ChevronDown, Calendar, LayoutDashboard } from "lucide-react";
import clsx from "clsx";
import OrderStatusChart from "./charts/OrderStatus";

const stats = [
  {
    label: "All",
    value: 50,
    color: "text-primary",
    icon: <LayoutDashboard className="fill-primary stroke-primary" />,
  },
  {
    label: "New",
    value: 50,
    color: "text-blue-600",
    icon: <LayoutDashboard className="fill-primary stroke-primary" />,
  },
  {
    label: "Pending",
    value: 50,
    color: "text-primary",
    icon: <LayoutDashboard className="fill-primary stroke-primary" />,
  },
  {
    label: "Dispatched",
    value: 50,
    color: "text-blue-600",
    icon: <LayoutDashboard className="fill-primary stroke-primary" />,
  },
  {
    label: "Delivered",
    value: 123,
    color: "text-primary",
    icon: <LayoutDashboard className="fill-primary stroke-primary" />,
  },
  {
    label: "Cancelled",
    value: 50,
    color: "text-primary",
    icon: <LayoutDashboard className="fill-primary stroke-primary" />,
  },
];

export default function OrderStatus() {
  return (
    <div
      className={`rounded-2xl dark:bg-dark bg-light border dark:border-border-dark shadow-sm overflow-hidden`}
    >
      <div className="p-3 border-b dark:border-border-dark flex sm:flex-row flex-col sm:items-center gap-2 justify-between">
        <h3
          className={`text-base lg:text-lg font-bold dark:text-white text-light-text-primary
          }`}
        >
          Order Status
        </h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white dark:bg-transparent py-2 px-4 rounded-xl border dark:border-border-dark">
            <span className="text-sm dark:text-gray-400 text-light-text-secondary">
              All Categories
            </span>
            <ChevronDown
              className={`w-4 h-4 dark:text-gray-400 text-light-text-secondary`}
            />
          </div>
          <div
            className={clsx(
              "flex items-center py-2 px-4 text-sm rounded-xl border dark:border-border-dark dark:bg-transparent bg-white dark:text-gray-400 text-light-text-secondary"
            )}
          >
            <input
              className={` outline-none max-w-14 text-center bg-transparent`}
              type="number"
              min={1990}
              max={2025}
              placeholder="2023"
              value={2023}
            />
            {/* 2023 */}
            {/* </span> */}
            <Calendar
              className={`w-4 h-4 dark:text-gray-400 text-light-text-secondary`}
            />
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col-reverse sm:gap-0 gap-5 items-center justify-center">
        <div className="grid grid-cols-2 h-full flex-1 w-full">
          {stats.map((stat) => (
            <div
              key={stat?.label}
              className="flex space-x-2 border border-r-0 dark:border-border-dark px-5 py-8"
            >
              <div className="flex items-start gap-1">
                <span className="text-lg">{stat.icon}</span>
              </div>
              <div>
                <p
                  className={`text-xs dark:text-gray-400 text-light-text-secondary`}
                >
                  {stat.label}
                </p>
                <div className={`text-lg font-bold`}>{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex w-full h-full justify-center">
          <OrderStatusChart
            data={[
              { label: "Apples", value: 50 },
              { label: "Bananas", value: 50 },
              { label: "Cherries", value: 50 },
              { label: "Dates", value: 50 },
              { label: "Elderberries", value: 50 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
