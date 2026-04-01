import { useState } from "react";
import dayjs from "dayjs";
import "./App.css";
import CalendarView from "./components/Calendar/CalendarView";
import HolidayPanel from "./components/Holiday/HolidayPanel";
import HolidayForm from "./components/Forms/HolidayForm";

function App() {
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showHolidayForm, setShowHolidayForm] = useState(false);

  function handleAddHoliday(newHoliday) {
    console.log("New holiday:", newHoliday); // hook up to real data later
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Holiday App</h1>
        <div className="app-actions">
          <button>+ Add Person</button>
          <button onClick={() => setShowHolidayForm(true)}>
            + Add Holiday
          </button>
        </div>
      </header>

      <main className="app-main">
        <HolidayPanel selectedDay={selectedDay} />
        <CalendarView selectedDay={selectedDay} onDaySelect={setSelectedDay} />
      </main>

      {showHolidayForm && (
        <HolidayForm
          onClose={() => setShowHolidayForm(false)}
          onSubmit={handleAddHoliday}
        />
      )}
    </div>
  );
}

export default App;
