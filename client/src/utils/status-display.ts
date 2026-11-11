import type { FoundStatus, LostStatus } from "../types/activity";

export type StatusDisplay = {
  label: string;
  className: string;
  note?: string; // helper text shown on non-clickable rows
};

const handedIn: StatusDisplay = {
  label: "Handed in",
  className: "bg-info-bg text-info-text",
  note: "Thanks for helping! Staff have it.",
};

// received` and `matched` look same to reporter
// but `matched` will be used for searching for lost item
export const FINDER_DISPLAY: Record<FoundStatus, StatusDisplay> = {
  pending_dropoff: {
    label: "Waiting for drop-off",
    className: "bg-warning-bg text-warning-text",
  },
  received: handedIn,
  matched: handedIn,
  returned: {
    label: "Returned",
    className: "bg-green-line/15 text-navy",
    note: "Your reported item got returned to its owner!",
  },
};

export const OWNER_DISPLAY: Record<LostStatus, StatusDisplay> = {
  open: {
    label: "Searching",
    className: "bg-info-bg text-info-text",
    note: "We're checking turned-in items and will let you know if one matches.",
  },
  match_found: {
    label: "Claimed",
    className: "bg-sky/30 text-navy",
  },
  returned: {
    label: "Returned",
    className: "bg-green-line/15 text-navy",
    note: "Marked as returned to you.",
  },
};
