import type { StatusDisplay } from "../utils/status-display";

const StatusBadge = ({ label, className }: StatusDisplay) => (
  <span
    className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold ${className}`}
  >
    {label}
  </span>
);

export default StatusBadge;
