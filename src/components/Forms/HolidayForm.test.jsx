import { render, screen, fireEvent } from "@testing-library/react";
import HolidayForm from "./HolidayForm";

// Mock MUI date picker components
jest.mock("@mui/x-date-pickers-pro/DateRangeCalendar", () => ({
  DateRangeCalendar: () => <div data-testid="mock-date-range-calendar" />,
}));

jest.mock("@mui/x-date-pickers/LocalizationProvider", () => ({
  LocalizationProvider: ({ children }) => <>{children}</>,
}));

jest.mock("@mui/x-date-pickers/AdapterDayjs", () => ({
  AdapterDayjs: class {},
}));

const mockPeople = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
];

describe("HolidayForm", () => {
  const mockOnClose = jest.fn();
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Add Holiday heading", () => {
    render(
      <HolidayForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        people={mockPeople}
      />,
    );
    expect(screen.getByText("Add Holiday")).toBeInTheDocument();
  });

  test("renders all people in the dropdown", () => {
    render(
      <HolidayForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        people={mockPeople}
      />,
    );
    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();
    expect(screen.getByText("Bob Smith")).toBeInTheDocument();
  });

  test("disables dropdown when preselectedPersonId is provided", () => {
    render(
      <HolidayForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        people={mockPeople}
        preselectedPersonId={1}
      />,
    );
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  test("dropdown is enabled when no preselectedPersonId", () => {
    render(
      <HolidayForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        people={mockPeople}
      />,
    );
    expect(screen.getByRole("combobox")).not.toBeDisabled();
  });

  test("calls onClose when Cancel is clicked", () => {
    render(
      <HolidayForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        people={mockPeople}
      />,
    );
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("shows alert and does not submit when fields are empty", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(
      <HolidayForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        people={mockPeople}
      />,
    );

    fireEvent.click(screen.getByText("+ Add Holiday"));

    expect(alertMock).toHaveBeenCalledWith("Please fill in all fields");
    expect(mockOnSubmit).not.toHaveBeenCalled();
    alertMock.mockRestore();
  });

  test("renders holiday type buttons from mockData", () => {
    render(
      <HolidayForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        people={mockPeople}
      />,
    );
    // holidayTypes from mockData should render — check at least one exists
    const typeButtons = document.querySelectorAll(".type-btn");
    expect(typeButtons.length).toBeGreaterThan(0);
  });

  test("selecting a person updates the dropdown value", () => {
    render(
      <HolidayForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        people={mockPeople}
      />,
    );
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "1" } });
    expect(select.value).toBe("1");
  });

  test("renders the date inputs", () => {
    render(
      <HolidayForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        people={mockPeople}
      />,
    );
    const dateInputs = screen.getAllByDisplayValue("");
    // There should be at least 2 date inputs (start and end)
    const dateFields = document.querySelectorAll('input[type="date"]');
    expect(dateFields.length).toBe(2);
  });

  test("preselectedPersonId pre-fills the dropdown", () => {
    render(
      <HolidayForm
        onClose={mockOnClose}
        onSubmit={mockOnSubmit}
        people={mockPeople}
        preselectedPersonId={2}
      />,
    );
    expect(screen.getByRole("combobox").value).toBe("2");
  });
});
