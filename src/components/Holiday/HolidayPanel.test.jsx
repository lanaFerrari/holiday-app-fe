import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import HolidayPanel from "./HolidayPanel";

dayjs.extend(isBetween);

const mockPeople = [
  { id: 1, name: "Alice Johnson", jobTitle: "Frontend Developer" },
  { id: 2, name: "Bob Smith", jobTitle: "Designer" },
];

const mockHolidays = [
  {
    id: 1,
    personId: 1,
    startDate: "2026-04-01",
    endDate: "2026-04-10",
    type: "holiday",
  },
  {
    id: 2,
    personId: 2,
    startDate: "2026-04-15",
    endDate: "2026-04-20",
    type: "sick",
  },
];

describe("HolidayPanel", () => {
  test("shows person on holiday for a given day", () => {
    const selectedDay = dayjs("2026-04-05");

    render(
      <HolidayPanel
        selectedDay={selectedDay}
        holidays={mockHolidays}
        people={mockPeople}
        onPersonClick={() => {}}
      />,
    );

    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    expect(screen.queryByText("Bob Smith")).not.toBeInTheDocument();
  });

  test("shows no one message when no one is on holiday", () => {
    const selectedDay = dayjs("2026-04-25");

    render(
      <HolidayPanel
        selectedDay={selectedDay}
        holidays={mockHolidays}
        people={mockPeople}
        onPersonClick={() => {}}
      />,
    );

    expect(screen.getByText(/no one is off/i)).toBeInTheDocument();
  });

  test("shows correct heading for today", () => {
    const today = dayjs();

    render(
      <HolidayPanel
        selectedDay={today}
        holidays={[]}
        people={mockPeople}
        onPersonClick={() => {}}
      />,
    );

    expect(screen.getByText(/on holiday today/i)).toBeInTheDocument();
  });

  test("shows correct heading for a non-today date", () => {
    const selectedDay = dayjs("2026-04-05");

    render(
      <HolidayPanel
        selectedDay={selectedDay}
        holidays={mockHolidays}
        people={mockPeople}
        onPersonClick={() => {}}
      />,
    );

    expect(screen.getByText(/on holiday/i)).toBeInTheDocument();
  });
});
