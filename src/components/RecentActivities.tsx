import clsx from "clsx";
import { MessageSquare, Reply } from "lucide-react";
import React from "react";
import { activities } from "../services/constants";

const getActivityIcon = (type: string) => {
  switch (type) {
    case "message":
      return <MessageSquare className="w-3 h-3 text-white" />;
    case "reply":
      return <Reply className="w-3 h-3 text-white" />;
    case "order":
      return <div className="w-3 h-3 bg-white rounded-full"></div>;
    default:
      return <div className="w-3 h-3 bg-white rounded-full"></div>;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case "message":
      return "bg-orange-500";
    case "reply":
      return "bg-gray-500";
    case "order":
      return "bg-red-500";
    default:
      return "bg-purple-500";
  }
};

const switchBtn = [
  { id: 1, label: "Message", value: "message" },
  { id: 2, label: "Email", value: "email" },
];

export default function RecentActivities() {
  const [selectedTab, setSelectedTab] = React.useState("message");

  const groupedActivities = activities.reduce((acc, activity) => {
    if (!acc[activity.date]) {
      acc[activity.date] = [];
    }
    acc[activity.date].push(activity);
    return acc;
  }, {} as Record<string, typeof activities>);

  return (
    <div
      className={`rounded-xl dark:bg-dark bg-light border dark:border-border-dark shadow-sm`}
    >
      <div className="flex items-center justify-between p-3 border-b dark:border-border-dark">
        <h3
          className={`text-base lg:text-lg font-semibold dark:text-white text-light-text-primary`}
        >
          Recent Activities
        </h3>
        <div className="flex text-sm font-medium items-center border dark:border-border-dark border-border-light rounded-xl">
          {switchBtn?.map(({ id, label, value }) => (
            <button
              key={id}
              className={clsx(
                "border px-4 py-2 rounded-xl",
                selectedTab === value
                  ? "bg-white dark:bg-primary dark:text-white dark:border-border-dark border-border-light font-medium text-light-text-primary "
                  : "border-transparent dark:text-gray-400 text-light-text-secondary"
              )}
              onClick={() => setSelectedTab(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 p-5 max-h-80 overflow-auto">
        {Object.entries(groupedActivities).map(([date, dateActivities]) => (
          <div key={date}>
            <h4
              className={`text-xs font-medium uppercase tracking-wider dark:text-gray-400 text-light-text-secondary mb-2`}
            >
              {date}
            </h4>
            <div className="space-y-3">
              {dateActivities.map((activity) => (
                <div
                  key={activity.id}
                  className={clsx(
                    "flex items-start space-x-3",
                    activity.type === "reply" && "pl-9"
                  )}
                >
                  <div
                    className={clsx(
                      `w-6 h-6 ${getActivityColor(
                        activity.type
                      )} rounded-full flex items-center justify-center flex-shrink-0`
                    )}
                  >
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm dark:text-gray-400 text-light-text-secondary`}
                    >
                      <span className="font-medium text-primary">
                        {activity.user}
                      </span>{" "}
                      {activity.action}{" "}
                      <span className="font-medium text-primary">
                        {activity.target}
                      </span>{" "}
                      <span
                        className={`dark:text-gray-400 text-light-text-secondary`}
                      >
                        • {activity.time}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
