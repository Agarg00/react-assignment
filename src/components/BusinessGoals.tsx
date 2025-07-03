export default function BusinessGoals() {
  const goals = [
    { category: "New Clients", count: 50, color: "bg-purple-500" },
    { category: "Qualified", count: 50, color: "bg-blue-500" },
    { category: "Prospect", count: 50, color: "bg-green-500" },
    { category: "Rejected", count: 50, color: "bg-red-500" },
  ];

  return (
    <div className={`p-4 lg:p-6 rounded-xl dark:bg-dark bg-white shadow-sm`}>
      <h3
        className={`text-base lg:text-lg font-semibold dark:text-white text-gray-900 mb-4 lg:mb-6`}
      >
        Business Goals
      </h3>
      <div className="space-y-3 lg:space-y-4">
        {goals.map((goal) => (
          <div
            key={goal?.category}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${goal.color}`}></div>
              <span
                className={`text-sm font-medium dark:text-gray-400 text-light-text-secondary `}
              >
                {goal.category}
              </span>
            </div>
            <span
              className={`text-sm font-semibold dark:text-gray-400 text-light-text-secondary `}
            >
              {goal.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
