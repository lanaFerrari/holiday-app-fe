import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

function HolidayPanel({
  selectedDay,
  holidays = [],
  people = [],
  onPersonClick,
}) {
  const day = selectedDay || dayjs();
  const isToday = day.isSame(dayjs(), "day");

  const onHoliday = holidays
    .filter((holiday) =>
      day.isBetween(holiday.startDate, holiday.endDate, "day", "[]"),
    )
    .map((holiday) => ({
      ...holiday,
      person: people.find((person) => person.id === holiday.personId),
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
          {onHoliday.map((holiday) => (
            <li
              key={holiday.id}
              className="holiday-item"
              onClick={() => onPersonClick(holiday.person?.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="holiday-avatar-large">
                {holiday.person?.photo ? (
                  <img
                    src={holiday.person.photo}
                    alt={holiday.person.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  holiday.person?.name?.charAt(0)
                )}
              </div>
              <div>
                <p className="person-name">{holiday.person?.name}</p>
                <p className="person-title">{holiday.person?.jobTitle}</p>
                <p className="holiday-dates">
                  {dayjs(holiday.startDate).format("MMM D")} –{" "}
                  {dayjs(holiday.endDate).format("MMM D")}
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
