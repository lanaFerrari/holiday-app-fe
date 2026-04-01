import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

import { holidays, people } from "../../data/mockData";

function HolidayPanel({ selectedDay }) {
  const day = selectedDay || dayjs();
  const isToday = day.isSame(dayjs(), "day");

  const onHoliday = holidays
    .filter((h) => day.isBetween(h.startDate, h.endDate, "day", "[]"))
    .map((h) => ({
      ...h,
      person: people.find((p) => p.id === h.personId),
    }));

  return (
    <div className="holiday-panel">
      <h3>
        {isToday ? "On Holiday Today" : `On Holiday – ${day.format("MMM D")}`}
      </h3>
      {onHoliday.length === 0 ? (
        <p className="no-holidays">No one is off this day 🎉</p>
      ) : (
        <ul className="holiday-list">
          {onHoliday.map((h) => (
            <li key={h.id} className="holiday-item">
              <div className="holiday-avatar-large">
                {h.person?.name?.charAt(0)}
              </div>
              <div>
                <p className="person-name">{h.person?.name}</p>
                <p className="person-title">{h.person?.jobTitle}</p>
                <p className="holiday-dates">
                  {dayjs(h.startDate).format("MMM D")} –{" "}
                  {dayjs(h.endDate).format("MMM D")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HolidayPanel;
