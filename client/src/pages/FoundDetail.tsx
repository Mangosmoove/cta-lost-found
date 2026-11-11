import { Link, Navigate, useParams } from "react-router";
import PageHeader from "../components/PageHeader";
import QRCode from "../components/QRCode";
import StatusBadge from "../components/StatusBadge";
import { LINES } from "../utils/train-info";
import { FINDER_DISPLAY } from "../utils/status-display";
import { foundItems } from "../utils/mock-data";

const FoundDetail = () => {
  const { id } = useParams();
  const item = foundItems.find((i) => i.id === id);

  // unknown id, or already handed in / returned
  if (!item || item.status !== "pending_dropoff") {
    return <Navigate to="/activity" replace />;
  }

  // placeholder
  const token = `found:${item.id}`;
  const handInLine = LINES.find((l) => l.name === item.handInLine);

  return (
    <div>
      <PageHeader title="Thanks for helping!" backTo="/activity" />

      <div className="grid gap-6">
        <QRCode
          value={token}
          caption={token}
          label={`QR code for your ${item.category.toLowerCase()} drop-off at ${item.station}`}
        />

        <p className="text-center text-lg font-bold">
          Show this QR code to CTA staff when you hand in the item.
        </p>

        <div className="flex justify-center">
          <StatusBadge {...FINDER_DISPLAY[item.status]} />
        </div>

        <div className="rounded-3xl border-2 border-form-border bg-white p-5">
          <p className="text-lg font-bold">
            {item.category} · {item.color.toLowerCase()}
          </p>
          <p className="mt-1 flex items-center gap-2 text-gray-500">
            <span
              className={`size-3 shrink-0 rounded-full ${handInLine?.color}`}
            />
            {item.handInLine} Line · hand in at {item.station}
          </p>
        </div>

        <Link
          to="/activity"
          className="rounded-full border-2 border-navy bg-white py-3 text-center text-lg font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          Go to my activity
        </Link>
      </div>
    </div>
  );
};

export default FoundDetail;
