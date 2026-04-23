export const people = [
  { id: 1, name: "Alice Johnson", jobTitle: "Frontend Developer" },
  { id: 2, name: "Bob Smith", jobTitle: "Designer" },
];

export const holidayTypes = [
  { id: "holiday", label: "Holiday", color: "#1976d2" },
  { id: "family_day", label: "Family Day", color: "#9c27b0" },
  { id: "sick", label: "Sick", color: "#ff9800" },
  { id: "night", label: "Night", color: "#212121" },
  { id: "al_lodge", label: "At Lodge", color: "#f44336" },
];

export const holidays = [
  {
    id: 1,
    personId: 1,
    startDate: "2026-04-07",
    endDate: "2026-04-11",
    type: "holiday",
  },
  {
    id: 2,
    personId: 2,
    startDate: "2026-04-14",
    endDate: "2026-04-18",
    type: "sick",
  },
];
