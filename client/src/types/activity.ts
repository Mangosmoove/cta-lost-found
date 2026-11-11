export type FoundStatus =
  "pending_dropoff" | "received" | "matched" | "returned";
export type LostStatus = "open" | "match_found" | "returned";
export type Status = FoundStatus | LostStatus;

export type FoundReport = {
  id: string;
  category: string;
  colors: string[];
  line: string;
  station: string; // hand-in station
  status: FoundStatus;
};

export type LostReport = {
  id: string;
  category: string;
  colors: string[];
  lines: string[];
  station: string | null; // the station they think they lost it at
  status: LostStatus;
};
