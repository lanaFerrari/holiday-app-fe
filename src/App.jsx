import { useState } from "react";
import dayjs from "dayjs";
import "./App.css";
import CalendarView from "./components/Calendar/CalendarView";
import HolidayPanel from "./components/Holiday/HolidayPanel";
import HolidayForm from "./components/Forms/HolidayForm";
import PersonForm from "./components/Forms/PersonForm";
import PersonProfile from "./components/Person/PersonProfile";
import {
  people as initialPeople,
  holidays as initialHolidays,
} from "./data/mockData";

function App() {
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showHolidayForm, setShowHolidayForm] = useState(false);
  const [showPersonForm, setShowPersonForm] = useState(false);
  const [people, setPeople] = useState(initialPeople);
  const [holidays, setHolidays] = useState(initialHolidays);
  const [selectedPersonId, setSelectedPersonId] = useState(null);

  function handleAddPerson(newPerson) {
    const created = { ...newPerson, id: Date.now() };
    setPeople((prev) => [...prev, created]);
    setShowPersonForm(false);
    setSelectedPersonId(created.id); // ← navigate to profile immediately
  }

  function handleAddHoliday(newHoliday) {
    setHolidays((prev) => [...prev, { ...newHoliday, id: Date.now() }]);
  }

  // Profile page view
  if (selectedPersonId) {
    const person = people.find((p) => p.id === selectedPersonId);
    const personHolidays = holidays.filter(
      (h) => h.personId === selectedPersonId,
    );
    return (
      <PersonProfile
        person={person}
        holidays={personHolidays}
        onBack={() => setSelectedPersonId(null)}
      />
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Holiday App</h1>
        <div className="app-actions">
          <button onClick={() => setShowPersonForm(true)}>+ Add Person</button>
          <button onClick={() => setShowHolidayForm(true)}>
            + Add Holiday
          </button>
        </div>
      </header>

      <main className="app-main">
        <HolidayPanel
          selectedDay={selectedDay}
          holidays={holidays}
          people={people}
          onPersonClick={(id) => setSelectedPersonId(id)}
        />
        <CalendarView
          selectedDay={selectedDay}
          onDaySelect={setSelectedDay}
          holidays={holidays}
          people={people}
          onPersonClick={(id) => setSelectedPersonId(id)}
        />
      </main>

      {showHolidayForm && (
        <HolidayForm
          people={people}
          onClose={() => setShowHolidayForm(false)}
          onSubmit={handleAddHoliday}
        />
      )}

      {showPersonForm && (
        <PersonForm
          onClose={() => setShowPersonForm(false)}
          onSubmit={handleAddPerson}
        />
      )}
    </div>
  );
}

export default App;
