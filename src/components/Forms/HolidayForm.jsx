import { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { people, holidayTypes } from "../../data/mockData";
import "./HolidayForm.css";

function HolidayForm({ onClose, onSubmit }) {
  const [personId, setPersonId] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [holidayType, setHolidayType] = useState("");

  function handleSubmit() {
    if (!personId || !dateRange[0] || !dateRange[1] || !holidayType) {
      alert("Please fill in all fields");
      return;
    }

    onSubmit({
      personId: Number(personId),
      startDate: dateRange[0].format("YYYY-MM-DD"),
      endDate: dateRange[1].format("YYYY-MM-DD"),
      type: holidayType,
    });

    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <div>
            <h2>Add Holiday</h2>
            <p>Schedule time off for team members</p>
          </div>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Team Member */}
        <div className="form-group">
          <label>Team Member *</label>
          <select
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
          >
            <option value="">Select a team member</option>
            {people.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range */}
        <div className="form-group">
          <label>Holiday Duration *</label>
          <div className="date-inputs">
            <input
              type="date"
              value={dateRange[0] ? dateRange[0].format("YYYY-MM-DD") : ""}
              onChange={(e) =>
                setDateRange([
                  e.target.value ? dayjs(e.target.value) : null,
                  dateRange[1],
                ])
              }
            />
            <input
              type="date"
              value={dateRange[1] ? dateRange[1].format("YYYY-MM-DD") : ""}
              onChange={(e) =>
                setDateRange([
                  dateRange[0],
                  e.target.value ? dayjs(e.target.value) : null,
                ])
              }
            />
          </div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangeCalendar
              value={dateRange}
              onChange={(newValue) => setDateRange(newValue)}
              calendars={1}
            />
          </LocalizationProvider>
        </div>

        {/* Holiday Type */}
        <div className="form-group">
          <label>Holiday Type *</label>
          <div className="type-buttons">
            {holidayTypes.map((t) => (
              <button
                key={t.id}
                className={`type-btn ${holidayType === t.id ? "active" : ""}`}
                style={{ "--type-color": t.color }}
                onClick={() => setHolidayType(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-submit" onClick={handleSubmit}>
            + Add Holiday
          </button>
        </div>
      </div>
    </div>
  );
}

export default HolidayForm;
