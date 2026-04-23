import dayjs from "dayjs";
import { useState } from "react";
import HolidayForm from "../Forms/HolidayForm";
import "./PersonProfile.css";

function PersonProfile({ person, holidays, onBack, onAddHoliday }) {
  const [tab, setTab] = useState("all");
  const [showHolidayForm, setShowHolidayForm] = useState(false);

  const today = dayjs();

  const filteredHolidays = holidays.filter((h) => {
    if (tab === "upcoming") return dayjs(h.startDate).isAfter(today);
    if (tab === "past") return dayjs(h.endDate).isBefore(today);
    return true;
  });

  const totalDays = 25;
  const usedDays = holidays.reduce((acc, h) => {
    return acc + dayjs(h.endDate).diff(dayjs(h.startDate), "day") + 1;
  }, 0);
  const remainingDays = totalDays - usedDays;
  const usedPercent = Math.min((usedDays / totalDays) * 100, 100);

  function getStatus(h) {
    if (dayjs(h.endDate).isBefore(today))
      return { label: "Completed", color: "#999" };
    if (dayjs(h.startDate).isAfter(today))
      return { label: "Upcoming", color: "#1976d2" };
    return { label: "Active", color: "#4caf50" };
  }

  return (
    <div className="profile-page">
      <header className="app-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h1>Holiday App</h1>
      </header>

      <div className="profile-title">
        <h2>Profile Details</h2>
        <p>View personal information and holiday bookings</p>
      </div>

      <div className="profile-body">
        {/* Left Panel */}
        <div className="profile-left">
          <div className="profile-avatar-large">
            {person.picture ? (
              <img
                src={URL.createObjectURL(person.picture)}
                alt={person.name}
              />
            ) : (
              <span>{person.name?.charAt(0)}</span>
            )}
          </div>
          <h3>{person.name}</h3>
          <p className="profile-role">{person.role}</p>

          <ul className="profile-info">
            {person.email && <li>✉️ {person.email}</li>}
            {person.phone && <li>📞 {person.phone}</li>}
            {person.department && <li>💼 {person.department}</li>}
          </ul>

          <div className="allowance">
            <h4>Holiday Allowance</h4>
            <div className="allowance-row">
              <span>Total Days</span>
              <span>{totalDays} days</span>
            </div>
            <div className="allowance-row">
              <span>Used</span>
              <span>{usedDays} days</span>
            </div>
            <div className="allowance-row">
              <span>Remaining</span>
              <span className="remaining">{remainingDays} days</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${usedPercent}%` }}
              />
            </div>
            <p className="progress-label">{Math.round(usedPercent)}% used</p>
          </div>

          <div className="profile-actions">
            <button
              className="btn-add-holiday"
              onClick={() => setShowHolidayForm(true)}
            >
              + Add Holiday
            </button>
            <button className="btn-away">+ Away today</button>
          </div>
          <button className="btn-delete">🗑 Delete Profile</button>
        </div>

        {/* Right Panel */}
        <div className="profile-right">
          <h3>Booked Holidays</h3>
          <p>View and manage all holiday bookings</p>

          <div className="tabs">
            {["all", "upcoming", "past"].map((t) => (
              <button
                key={t}
                className={`tab-btn ${tab === t ? "active" : ""}`}
                onClick={() => setTab(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          <div className="holiday-list">
            {filteredHolidays.length === 0 ? (
              <p className="no-holidays">No holidays found</p>
            ) : (
              filteredHolidays.map((h) => {
                const status = getStatus(h);
                const days =
                  dayjs(h.endDate).diff(dayjs(h.startDate), "day") + 1;
                return (
                  <div key={h.id} className="holiday-card">
                    <div className="holiday-card-date">
                      <span className="month">
                        {dayjs(h.startDate).format("MMM")}
                      </span>
                      <span className="day-num">
                        {dayjs(h.startDate).format("D")}
                      </span>
                    </div>
                    <div className="holiday-card-info">
                      <div className="holiday-card-badges">
                        <span
                          className="status-badge"
                          style={{ background: status.color }}
                        >
                          {status.label}
                        </span>
                        {h.type && <span className="type-badge">{h.type}</span>}
                      </div>
                      <p className="holiday-card-dates">
                        {dayjs(h.startDate).format("dddd, MMMM D")} –{" "}
                        {dayjs(h.endDate).format("dddd, MMMM D, YYYY")}
                      </p>
                      <p className="holiday-card-days">
                        {days} day{days > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="profile-summary">
            <div className="summary-card">
              <p className="summary-num">{holidays.length}</p>
              <p className="summary-label">Total Bookings</p>
            </div>
            <div className="summary-card">
              <p className="summary-num">
                {
                  holidays.filter(
                    (h) =>
                      !dayjs(h.endDate).isBefore(today) &&
                      !dayjs(h.startDate).isAfter(today),
                  ).length
                }
              </p>
              <p className="summary-label">Active Holiday</p>
            </div>
            <div className="summary-card">
              <p className="summary-num">
                {
                  holidays.filter((h) => dayjs(h.startDate).isAfter(today))
                    .length
                }
              </p>
              <p className="summary-label">Upcoming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reuse HolidayForm, pre-selecting this person */}
      {showHolidayForm && (
        <HolidayForm
          people={[person]}
          preselectedPersonId={person.id}
          onClose={() => setShowHolidayForm(false)}
          onSubmit={(newHoliday) => {
            onAddHoliday(newHoliday);
            setShowHolidayForm(false);
          }}
        />
      )}
    </div>
  );
}

export default PersonProfile;
