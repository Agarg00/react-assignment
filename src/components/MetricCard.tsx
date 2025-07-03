import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  subtitle?: string;
}

export default function MetricCard({
  title,
  value,
  change,
  isPositive,
  icon,
  subtitle,
}: Readonly<MetricCardProps>) {
  return (
    <div
      className={` rounded-xl border dark:border-border-dark min-w-56 w-full shadow-[0px_3px_6px_0px_#0000000F]`}
    >
      <div className="flex items-start gap-4 p-5 dark:bg-dark rounded-xl">
        <div className="rounded-xl flex items-center justify-center p-px bg-custom-gradient">
          <div className="bg-light dark:bg-dark  rounded-xl p-2">
            <img src={icon} alt="icon" />
          </div>
        </div>
        <div className="flex flex-col-reverse">
          <h3
            className={`text-xl lg:text-[22px] font-bold dark:text-white text-light-text-primary mb-1`}
          >
            {value}
          </h3>
          <p
            className={`text-xs dark:text-gray-400 text-light-text-secondary mb-1`}
          >
            {title}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center border-t dark:border-border-dark px-5 py-3 text-xs font-medium">
        <div
          className={`flex items-center gap-1 rounded-full ${
            isPositive ? "text-app-green" : "text-app-red"
          }`}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{change}</span>
        </div>
        {subtitle && (
          <p className="dark:text-gray-400 text-light-text-secondary">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
