import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import { useState } from "react";
dayjs.extend(isBetween);

import { holidays, people } from "../../data/mockData";

function CalendarView({ selectedDay, onDaySelect }) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const startOfMonth = currentMonth.startOf("month");
  const endOfMonth = currentMonth.endOf("month");
  const startDay = startOfMonth.startOf("week");
  const endDay = endOfMonth.endOf("week");

  const days = [];
  let current = startDay;
  while (current.isBefore(endDay) || current.isSame(endDay, "day")) {
    days.push(current);
    current = current.add(1, "day");
  }

  function getHolidaysForDay(day) {
    return holidays.filter((holiday) =>
      day.isBetween(holiday.startDate, holiday.endDate, "day", "[]"),
    );
  }

  function getPerson(personId) {
    return people.find((person) => person.id === personId);
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button
          onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
        >
          {"<"}
        </button>
        <h2>{currentMonth.format("MMMM YYYY")}</h2>
        <button onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}>
          {">"}
        </button>
      </div>

      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="calendar-day-label">
            {d}
          </div>
        ))}

        {days.map((day) => {
          const isCurrentMonth = day.month() === currentMonth.month();
          const isToday = day.isSame(dayjs(), "day");
          const dayHolidays = getHolidaysForDay(day);
          const isSelected = selectedDay
            ? day.isSame(selectedDay, "day")
            : day.isSame(dayjs(), "day");

          return (
            <div
              key={day.toString()}
              className={`calendar-cell ${!isCurrentMonth ? "faded" : ""} ${isSelected ? "selected" : ""}`}
              onClick={() => onDaySelect(day)}
            >
              <span className="day-number">{day.date()}</span>
              <div className="day-holidays">
                {dayHolidays.map((holiday) => {
                  const person = getPerson(holiday.personId);
                  return (
                    <div
                      key={holiday.id}
                      className="holiday-avatar"
                      title={person?.name}
                    >
                      {person?.name?.charAt(0)}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarView;
