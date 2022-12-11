import { useState, useEffect, useRef } from "react"
import Datepicker from "../src/index"

import "./Datepicker.scss"

const getDate = date => date?.toDate() ?? null

const MonthsYearsToggle = ({ disabled, style, onClick, year, month, defaultText, mode, pickerShown }) => (
  <button
    style={style}
    className={`rmdp-header-button rmdp-header-button--${mode} ${pickerShown ? "active" : ""}`}
    type="button"
    onClick={onClick}
  >
    {mode === "year" ? year : month}
  </button>
)

const App = () => {
  const ref = useRef()
  const [date, setDate] = useState(null)

  useEffect(() => {
    ref.current.openCalendar()
  }, [])

  return (
    <div className="container">
      <h1>React-Multi-Date-Picker sandbox</h1>
      <div className="picker-wrap">
        <Datepicker
          ref={ref}
          format="D MMM YYYY"
          weekStartDayIndex={1}
          range
          rangeSeparator=" - "
          numberOfMonths={2}
          allowInvalidDate
          value={date}
          renderMonthsYearsToggle={<MonthsYearsToggle />}
          // onClose={() => false}
          onChange={res => {
            if (Array.isArray(res)) return setDate([getDate(res[0]), getDate(res[1])])
            setDate(getDate(res))
          }}
        />
      </div>
    </div>
  )
}

export default App
