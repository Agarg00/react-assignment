import React from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

import RevenueBarChart from "./charts/RevenueChart";

const switchBtn = [
  { id: 1, label: "Revenue", value: "revenue" },
  { id: 2, label: "Orders", value: "orders" },
  { id: 3, label: "Customers", value: "customers" },
];

export default function RevenueChart() {
  const chartData = [
    { month: "Jan", value: 45000, height: 60 },
    { month: "Feb", value: 52000, height: 80 },
    { month: "Mar", value: 48000, height: 70 },
    { month: "Apr", value: 38000, height: 50 },
    { month: "May", value: 42000, height: 55 },
    { month: "Jun", value: 58000, height: 85 },
    { month: "Jul", value: 51000, height: 75 },
    { month: "Aug", value: 62000, height: 90 },
    { month: "Sep", value: 49000, height: 65 },
    { month: "Oct", value: 56000, height: 82 },
    { month: "Nov", value: 59000, height: 87 },
    { month: "Dec", value: 71000, height: 100 },
  ];

  const totalRevenue = chartData.reduce((sum, item) => sum + item.value, 0);
  const [selectedTab, setSelectedTab] = React.useState("revenue");

  return (
    <div
      className={`rounded-2xl dark:bg-dark bg-light border dark:border-border-dark shadow-sm`}
    >
      <div className="px-4 py-3 flex sm:flex-row flex-col gap-2 justify-between items-center border-b dark:border-border-dark border-border-light">
        <div className="flex text-sm font-medium items-center border dark:border-border-dark rounded-xl w-fit">
          {switchBtn?.map(({ id, label, value }) => (
            <button
              key={id}
              className={clsx(
                "border px-4 py-2 rounded-xl",
                selectedTab === value
                  ? "bg-white dark:bg-primary dark:text-white border-border-light dark:border-border-dark text-light-text-primary "
                  : "border-transparent dark:text-gray-400 text-light-text-secondary "
              )}
              onClick={() => setSelectedTab(value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 dark:bg-transparent bg-white dark:border-border-dark py-2 px-4 rounded-xl border">
            <span
              className={`text-sm dark:text-gray-400 text-light-text-secondary`}
            >
              All Categories
            </span>
            <ChevronDown
              className={`w-4 h-4 dark:text-gray-400 text-light-text-secondary`}
            />
          </div>
          <div
            className={clsx(
              "flex items-center py-2 text-sm max-h-[38px] px-4 rounded-xl border dark:border-border-dark dark:bg-transparent bg-white"
            )}
          >
            <input
              className={` outline-none max-w-28  text-center bg-transparent`}
              type="month"
              placeholder="2023"
              // value={2023}
            />
            {/* 2023 */}
            {/* </span> */}
            {/* <Calendar
              className={`w-4 h-4 ${
                isDarkMode ? 'text-gray-400' : 'text-light-text-secondary'
              }`}
            /> */}
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-6 space-y-2 sm:space-y-0">
          <h3 className="text-base lg:text-lg font-semibold dark:text-white text-light-text-primary">
            Revenue
          </h3>
          <p className="text-sm dark:text-white text-light-text-secondary">
            Total Revenue: <strong>${totalRevenue.toLocaleString()}</strong>
          </p>
        </div>

        <div className="xl:overflow-hidden overflow-auto">
          <RevenueBarChart />
        </div>
        <p className="mx-auto text-center mt-2 before:content-[' '] before:w-2 before:h-2 dark:before:bg-light before:bg-dark before:inline-block before:mr-3 before:rounded-full before:mb-0.5">2023</p>
      </div>
    </div>
  );
}
