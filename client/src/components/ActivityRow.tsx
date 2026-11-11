import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { LINES } from "../utils/train-info";
import type { StatusDisplay } from "../utils/status-display";

type ActivityRowProps = {
  to?: string; // for detailed views, e.g., QR code
  category: string;
  colors: string[];
  lines: string[];
  place: string;
  display: StatusDisplay;
};

const rowClass =
  "flex items-center gap-3 rounded-3xl border-2 border-form-border bg-white p-5";

const LineDots = ({ lines }: { lines: string[] }) => (
  <span className="flex gap-1">
    {lines.map((name) => (
      <span
        key={name}
        className={`size-3 rounded-full ${LINES.find((l) => l.name === name)?.color}`}
      />
    ))}
  </span>
);

const ActivityRow = ({
  to,
  category,
  colors,
  lines,
  place,
  display,
}: ActivityRowProps) => {
  const body = (
    <>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-lg font-bold">
          {category} · {colors.join(" & ").toLowerCase()}
        </span>
        <span className="mt-1 flex items-center gap-2 text-gray-500">
          <LineDots lines={lines} />
          <span className="truncate">{place}</span>
        </span>
        {!to && display.note && (
          <span className="mt-2 block text-sm text-gray-500">
            {display.note}
          </span>
        )}
      </span>
      <StatusBadge {...display} />
      {to && (
        <ChevronRight
          size={20}
          className="shrink-0 text-gray-500"
          aria-hidden
        />
      )}
    </>
  );

  return to ? (
    <Link
      to={to}
      className={`${rowClass} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy`}
    >
      {body}
    </Link>
  ) : (
    <div className={rowClass}>{body}</div>
  );
};

export default ActivityRow;
