import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MetricCard from "./components/MetricCard";
import AccountDetails from "./components/AccountDetails";
import OrderStatus from "./components/OrderStatus";
import RecentActivities from "./components/RecentActivities";
import RecentOrders from "./components/RecentOrders";
import RevenueChart from "./components/RevenueChart";
import { metrics } from "./services/constants.tsx";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="min-h-screen dark:bg-dark bg-light transition-colors duration-200">
      <Header />
      <div className="p-4 h-full border-b dark:border-border-dark dark:bg-secondary-dark">
        <h1 className="text-base dark:text-gray-200 text-light-text-secondary">
          CRM / Account / <strong>Account Details</strong>
        </h1>
      </div>

      <main className="px-4 py-2 lg:px-6">
        <div className="mx-auto">
          {/* Page Title */}

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 lg:gap-6">
            {/* Left Sidebar - Account Details */}
            <div className="xl:col-span-3">
              <AccountDetails />
            </div>

            {/* Main Content */}
            <div className="xl:col-span-9">
              <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
              <div className="flex flex-col p-4 border border-t-0 border-border-light dark:border-border-dark rounded-b-2xl rounded-r-2xl space-y-4 bg-white dark:bg-secondary-dark">
                {/* Metrics Grid */}
                <div className="relative">
                  <button className="absolute top-1/2 bg-white dark:bg-secondary-dark dark:border-border-dark rounded-full p-1 border shadow-md -translate-y-1/2 -left-3">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="absolute top-1/2 bg-white dark:bg-secondary-dark dark:border-border-dark rounded-full p-1 border shadow-md -translate-y-1/2 -right-3">
                    <ChevronRight className="size-4" />
                  </button>
                  <div className="flex items-center gap-2.5 lg:gap-3.5 overflow-auto">
                    {metrics.map((metric) => (
                      <MetricCard
                        key={metric?.title}
                        title={metric.title}
                        value={metric.value}
                        change={metric.change}
                        isPositive={metric.isPositive}
                        icon={metric.icon}
                        subtitle={metric.subtitle}
                      />
                    ))}
                  </div>
                </div>

                {/* Order Status and Recent Activities */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <OrderStatus />
                  <RecentActivities />
                </div>

                {/* Recent Orders */}
                <RecentOrders />

                {/* Revenue Chart */}
                <RevenueChart />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
