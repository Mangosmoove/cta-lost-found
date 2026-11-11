import type { FoundReport, LostReport } from "../types/activity";

export const lostReports: LostReport[] = [];

export const foundItems: FoundReport[] = [
  {
    id: "1",
    category: "Wallet/ID",
    color: "Black",
    line: "Red",
    handInLine: "Red",
    station: "Howard",
    status: "pending_dropoff",
  },
  {
    id: "2",
    category: "Umbrella",
    color: "Blue",
    line: "Brown",
    handInLine: "Brown",
    station: "Belmont",
    status: "received",
  },
];

// temp stand-in for api /found-items
export const addFoundItem = (
  item: Omit<FoundReport, "id" | "status">,
): string => {
  const id = String(foundItems.length + 1);
  foundItems.push({ ...item, id, status: "pending_dropoff" });
  return id;
};
