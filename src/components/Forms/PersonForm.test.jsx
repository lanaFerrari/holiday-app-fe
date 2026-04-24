import { render, screen, fireEvent } from "@testing-library/react";
import PersonForm from "./PersonForm";

describe("PersonForm", () => {
  const mockOnClose = jest.fn();
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Add Team Member heading", () => {
    render(<PersonForm onClose={mockOnClose} onSubmit={mockOnSubmit} />);
    expect(screen.getByText("Add Team Member")).toBeInTheDocument();
  });

  test("renders all input fields", () => {
    render(<PersonForm onClose={mockOnClose} onSubmit={mockOnSubmit} />);
    expect(screen.getByPlaceholderText("Enter full name")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("member@company.com"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("+1 (555) 000-0000"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("e.g. Developer, Designer, Manager"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("e.g. Engineering, Marketing, Sales"),
    ).toBeInTheDocument();
  });

  test("calls onClose when Cancel is clicked", () => {
    render(<PersonForm onClose={mockOnClose} onSubmit={mockOnSubmit} />);
    fireEvent.click(screen.getByText("Cancel"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when the ✕ button is clicked", () => {
    render(<PersonForm onClose={mockOnClose} onSubmit={mockOnSubmit} />);
    fireEvent.click(screen.getByText("✕"));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("shows alert and does not submit when all fields are empty", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<PersonForm onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    fireEvent.click(screen.getByText("+ Add Member"));

    expect(alertMock).toHaveBeenCalledWith(
      "Please fill in all required fields",
    );
    expect(mockOnSubmit).not.toHaveBeenCalled();
    alertMock.mockRestore();
  });

  test("shows alert when only name is filled", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<PersonForm onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("Enter full name"), {
      target: { name: "name", value: "Alice Johnson" },
    });
    fireEvent.click(screen.getByText("+ Add Member"));

    expect(alertMock).toHaveBeenCalledWith(
      "Please fill in all required fields",
    );
    expect(mockOnSubmit).not.toHaveBeenCalled();
    alertMock.mockRestore();
  });

  test("calls onSubmit and onClose with correct data when all required fields are filled", () => {
    render(<PersonForm onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("Enter full name"), {
      target: { name: "name", value: "Alice Johnson" },
    });
    fireEvent.change(screen.getByPlaceholderText("member@company.com"), {
      target: { name: "email", value: "alice@company.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("+1 (555) 000-0000"), {
      target: { name: "phone", value: "1234567890" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("e.g. Developer, Designer, Manager"),
      {
        target: { name: "role", value: "Developer" },
      },
    );
    fireEvent.change(
      screen.getByPlaceholderText("e.g. Engineering, Marketing, Sales"),
      {
        target: { name: "department", value: "Engineering" },
      },
    );

    fireEvent.click(screen.getByText("+ Add Member"));

    expect(mockOnSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Alice Johnson",
        email: "alice@company.com",
        phone: "1234567890",
        role: "Developer",
        department: "Engineering",
      }),
    );
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("updates field values as user types", () => {
    render(<PersonForm onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByPlaceholderText("Enter full name");
    fireEvent.change(nameInput, {
      target: { name: "name", value: "Bob Smith" },
    });
    expect(nameInput.value).toBe("Bob Smith");

    const emailInput = screen.getByPlaceholderText("member@company.com");
    fireEvent.change(emailInput, {
      target: { name: "email", value: "bob@company.com" },
    });
    expect(emailInput.value).toBe("bob@company.com");
  });

  test("does not call onClose after failed validation", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<PersonForm onClose={mockOnClose} onSubmit={mockOnSubmit} />);

    fireEvent.click(screen.getByText("+ Add Member"));

    expect(mockOnClose).not.toHaveBeenCalled();
    alertMock.mockRestore();
  });
});
