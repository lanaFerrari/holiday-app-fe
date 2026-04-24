import { render, screen, fireEvent } from "@testing-library/react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import CalendarView from "./CalendarView";

dayjs.extend(isBetween);

const mockPeople = [
  { id: 1, name: "Alice Johnson", jobTitle: "Frontend Developer" },
];

const mockHolidays = [
  {
    id: 1,
    personId: 1,
    startDate: "2026-04-01",
    endDate: "2026-04-30",
    type: "holiday",
  },
];

describe("CalendarView", () => {
  test("renders the current month and year", () => {
    const today = dayjs();
    const expectedHeading = today.format("MMMM YYYY");

    render(
      <CalendarView
        selectedDay={today}
        onDaySelect={() => {}}
        holidays={mockHolidays}
        people={mockPeople}
        onPersonClick={() => {}}
      />,
    );

    expect(screen.getByText(expectedHeading)).toBeInTheDocument();
  });

  test("renders day of week headers", () => {
    render(
      <CalendarView
        selectedDay={dayjs()}
        onDaySelect={() => {}}
        holidays={[]}
        people={[]}
        onPersonClick={() => {}}
      />,
    );

    expect(screen.getByText("Sun")).toBeInTheDocument();
    expect(screen.getByText("Mon")).toBeInTheDocument();
    expect(screen.getByText("Sat")).toBeInTheDocument();
  });

  test("navigates to next month when > is clicked", () => {
    const today = dayjs();
    const nextMonth = today.add(1, "month").format("MMMM YYYY");

    render(
      <CalendarView
        selectedDay={today}
        onDaySelect={() => {}}
        holidays={[]}
        people={[]}
        onPersonClick={() => {}}
      />,
    );

    fireEvent.click(screen.getByText(">"));
    expect(screen.getByText(nextMonth)).toBeInTheDocument();
  });

  test("navigates to previous month when < is clicked", () => {
    const today = dayjs();
    const prevMonth = today.subtract(1, "month").format("MMMM YYYY");

    render(
      <CalendarView
        selectedDay={today}
        onDaySelect={() => {}}
        holidays={[]}
        people={[]}
        onPersonClick={() => {}}
      />,
    );

    fireEvent.click(screen.getByText("<"));
    expect(screen.getByText(prevMonth)).toBeInTheDocument();
  });
});
