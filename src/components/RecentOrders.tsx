import { ArrowRightCircle, ShoppingBasket, User } from "lucide-react";
import { orders } from "../services/constants";

export default function RecentOrders() {
  return (
    <div
      className={`rounded-2xl dark:bg-dark bg-light border dark:border-border-dark shadow-sm`}
    >
      <div className="px-4 py-3 border-b dark:border-border-dark flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
        <h3
          className={`text-base lg:text-lg font-bold dark:text-white text-light-text-secondary"`}
        >
          Recent Orders
        </h3>
        <div className="hidden items-center space-x-4">
          <span
            className={`text-xs lg:text-sm dark:text-gray-400 text-light-text-secondary"`}
          >
            All Categories
          </span>
          <button className="text-primary text-xs lg:text-sm hover:text-purple-700 transition-colors">
            View All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr
              className={`border-b dark:bg-secondary-dark dark:border-border-dark border-border-light`}
            >
              <th
                className={`min-w-24 text-left px-4 py-1.5 text-xs uppercase tracking-wider dark:text-gray-400 text-light-text-secondary"`}
              >
                Order ID
              </th>
              <th
                className={`min-w-56 text-left px-4 py-1.5 text-xs uppercase tracking-wider dark:text-gray-400 text-light-text-secondary"`}
              >
                Products
              </th>
              <th
                className={`min-w-36 text-left px-4 py-1.5 text-xs uppercase tracking-wider dark:text-gray-400 text-light-text-secondary"`}
              >
                Channel
              </th>
              <th
                className={`min-w-48 text-left px-4 py-1.5 text-xs uppercase tracking-wider dark:text-gray-400 text-light-text-secondary"`}
              >
                Customer
              </th>
              <th
                className={`min-w-32 text-left px-4 py-1.5 text-xs uppercase tracking-wider dark:text-gray-400 text-light-text-secondary"`}
              >
                Total
              </th>
              <th
                className={`min-w-44 text-left px-4 py-1.5 text-xs uppercase tracking-wider dark:text-gray-400 text-light-text-secondary"`}
              >
                Delivery Date
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className={`border-b dark:border-border-dark border-border-light transition-colors`}
              >
                <td
                  className={`px-4 py-3 text-xs lg:text-sm dark:text-gray-400 text-light-text-secondary`}
                >
                  {index + 1}
                </td>
                <td
                  className={`px-4 py-3 text-xs lg:text-sm dark:text-gray-400 text-light-text-secondary`}
                >
                  <div className="flex items-center gap-2">
                    <span>X {index}</span>
                    <div className="bg-gray-500 rounded-full p-2">
                      <ShoppingBasket className="size-4" />
                    </div>
                    {order.product}
                  </div>
                </td>
                <td
                  className={`px-4 py-3 text-xs lg:text-sm dark:text-gray-400 text-light-text-secondary`}
                >
                  <span className="border border-border-light dark:border-border-dark py-1 px-2 rounded-lg text-xs">
                    ${order.channel}
                  </span>
                </td>
                <td
                  className={`px-4 py-3 text-xs lg:text-sm dark:text-gray-400 text-light-text-secondary `}
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-500 rounded-full p-2">
                      <User className="size-4" />
                    </div>
                    {order.customer}
                  </div>
                </td>
                <td
                  className={`px-4 py-3 text-xs lg:text-sm dark:text-gray-400 text-light-text-secondary`}
                >
                  ${order.total}
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs`}>
                    {order.date}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mx-auto w-full text-primary text-xs py-2">
          <button className="flex items-center justify-center mx-auto gap-x-1.5">
            <span>View 256 more orders</span>
            <ArrowRightCircle className="fill-primary stroke-white size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
