import { render, screen, fireEvent, within } from "@testing-library/react";
import dayjs from "dayjs";
import PersonProfile from "./PersonProfile";

jest.mock("../Forms/HolidayForm", () => ({
  __esModule: true,
  default: ({ onClose }) => (
    <div data-testid="mock-holiday-form">
      <button onClick={onClose}>Close Form</button>
    </div>
  ),
}));

const mockPerson = {
  id: 1,
  name: "Alice Johnson",
  email: "alice@company.com",
  phone: "1234567890",
  role: "Frontend Developer",
  department: "Engineering",
};

const today = dayjs();

const mockHolidays = [
  {
    id: 1,
    personId: 1,
    startDate: today.subtract(10, "day").format("YYYY-MM-DD"),
    endDate: today.subtract(6, "day").format("YYYY-MM-DD"),
    type: "holiday",
  },
  {
    id: 2,
    personId: 1,
    startDate: today.add(5, "day").format("YYYY-MM-DD"),
    endDate: today.add(10, "day").format("YYYY-MM-DD"),
    type: "sick",
  },
];

describe("PersonProfile", () => {
  const mockOnBack = jest.fn();
  const mockOnAddHoliday = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders person name and email", () => {
    render(
      <PersonProfile
        person={mockPerson}
        holidays={mockHolidays}
        onBack={mockOnBack}
        onAddHoliday={mockOnAddHoliday}
      />,
    );
    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    expect(screen.getByText(/alice@company\.com/i)).toBeInTheDocument();
  });

  test("renders person department", () => {
    render(
      <PersonProfile
        person={mockPerson}
        holidays={mockHolidays}
        onBack={mockOnBack}
        onAddHoliday={mockOnAddHoliday}
      />,
    );
    expect(screen.getByText(/Engineering/i)).toBeInTheDocument();
  });

  test("renders holiday allowance with correct used and remaining days", () => {
    render(
      <PersonProfile
        person={mockPerson}
        holidays={mockHolidays}
        onBack={mockOnBack}
        onAddHoliday={mockOnAddHoliday}
      />,
    );
    expect(screen.getByText("25 days")).toBeInTheDocument();
    expect(screen.getByText("14 days")).toBeInTheDocument();
  });

  test("shows total bookings count", () => {
    render(
      <PersonProfile
        person={mockPerson}
        holidays={mockHolidays}
        onBack={mockOnBack}
        onAddHoliday={mockOnAddHoliday}
      />,
    );
    const totalBookingsCard = screen
      .getByText("Total Bookings")
      .closest(".summary-card");
    expect(within(totalBookingsCard).getByText("2")).toBeInTheDocument();
  });

  test("filters to only upcoming holidays when Upcoming tab is clicked", () => {
    render(
      <PersonProfile
        person={mockPerson}
        holidays={mockHolidays}
        onBack={mockOnBack}
        onAddHoliday={mockOnAddHoliday}
      />,
    );
    const tabs = screen.getByRole("button", { name: "Upcoming" });
    fireEvent.click(tabs);
    const holidayList = document.querySelector(".holiday-list");
    expect(within(holidayList).getByText("sick")).toBeInTheDocument();
    expect(within(holidayList).queryByText("holiday")).not.toBeInTheDocument();
  });

  test("filters to only past holidays when Past tab is clicked", () => {
    render(
      <PersonProfile
        person={mockPerson}
        holidays={mockHolidays}
        onBack={mockOnBack}
        onAddHoliday={mockOnAddHoliday}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Past" }));
    const holidayList = document.querySelector(".holiday-list");
    expect(within(holidayList).getByText("holiday")).toBeInTheDocument();
    expect(within(holidayList).queryByText("sick")).not.toBeInTheDocument();
  });

  test("shows no holidays message when tab has no results", () => {
    render(
      <PersonProfile
        person={mockPerson}
        holidays={[]}
        onBack={mockOnBack}
        onAddHoliday={mockOnAddHoliday}
      />,
    );
    expect(screen.getByText("No holidays found")).toBeInTheDocument();
  });

  test("shows HolidayForm when Add Holiday is clicked", () => {
    render(
      <PersonProfile
        person={mockPerson}
        holidays={mockHolidays}
        onBack={mockOnBack}
        onAddHoliday={mockOnAddHoliday}
      />,
    );
    fireEvent.click(screen.getByText("+ Add Holiday"));
    expect(screen.getByTestId("mock-holiday-form")).toBeInTheDocument();
  });

  test("calls onAddHoliday with today's date when Away today is clicked", () => {
    render(
      <PersonProfile
        person={mockPerson}
        holidays={mockHolidays}
        onBack={mockOnBack}
        onAddHoliday={mockOnAddHoliday}
      />,
    );
    fireEvent.click(screen.getByText("+ Away today"));
    expect(mockOnAddHoliday).toHaveBeenCalledWith(
      expect.objectContaining({
        personId: 1,
        startDate: today.format("YYYY-MM-DD"),
        endDate: today.format("YYYY-MM-DD"),
        type: "holiday",
      }),
    );
  });
});
