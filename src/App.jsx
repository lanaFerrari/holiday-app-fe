import { useState } from 'react'
import dayjs from 'dayjs'
import './App.css'
import CalendarView from './components/calendar/CalendarView'
import HolidayPanel from './components/Holiday/HolidayPanel'
import HolidayForm from './components/Forms/HolidayForm'
import PersonForm from './components/Forms/PersonForm'

function App() {
  const [selectedDay, setSelectedDay] = useState(dayjs())
  const [showHolidayForm, setShowHolidayForm] = useState(false)
  const [showPersonForm, setShowPersonForm] = useState(false)

  function handleAddHoliday(newHoliday) {
    console.log('New holiday:', newHoliday)
  }

  function handleAddPerson(newPerson) {
    console.log('New person:', newPerson)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Holiday App</h1>
        <div className="app-actions">
          <button onClick={() => setShowPersonForm(true)}>+ Add Person</button>
          <button onClick={() => setShowHolidayForm(true)}>+ Add Holiday</button>
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

      {showPersonForm && (
        <PersonForm
          onClose={() => setShowPersonForm(false)}
          onSubmit={handleAddPerson}
        />
      )}
    </div>
  )
}

export default App