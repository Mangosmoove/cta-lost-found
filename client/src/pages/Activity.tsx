import PageHeader from "../components/PageHeader";
import ActivityRow from "../components/ActivityRow";
import { FINDER_DISPLAY, OWNER_DISPLAY } from "../utils/status-display";
import { lostReports, foundItems } from "../utils/mock-data";

const EmptyState = ({ children }: { children: string }) => (
  <p className="rounded-3xl border-2 border-dashed border-form-border px-4 py-10 text-center text-gray-500">
    {children}
  </p>
);

const Activity = () => {
  return (
    <div>
      <PageHeader title="My activity" />

      <section className="mb-8">
        <h2 className="mb-4 text-lg font-bold">Things I lost</h2>
        {lostReports.length === 0 ? (
          <EmptyState>No lost reports yet.</EmptyState>
        ) : (
          <ul className="grid gap-3">
            {lostReports.map((r) => (
              <li key={r.id}>
                <ActivityRow
                  to={
                    r.status === "match_found"
                      ? `/activity/lost/${r.id}`
                      : undefined
                  }
                  category={r.category}
                  color={r.color}
                  lines={r.lines}
                  place={r.station ?? r.lines.join(", ")}
                  display={OWNER_DISPLAY[r.status]}
                />
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold">Things I found</h2>
        {foundItems.length === 0 ? (
          <EmptyState>No found items yet.</EmptyState>
        ) : (
          <ul className="grid gap-3">
            {foundItems.map((i) => (
              <li key={i.id}>
                <ActivityRow
                  to={
                    i.status === "pending_dropoff"
                      ? `/activity/found/${i.id}`
                      : undefined
                  }
                  category={i.category}
                  color={i.color}
                  lines={[i.line]}
                  place={i.station}
                  display={FINDER_DISPLAY[i.status]}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Activity;
