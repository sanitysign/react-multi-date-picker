import { useState, useEffect, useRef } from "react"
import Datepicker from "../src/index"
// import Toolbar from "../src/plugins/toolbar/toolbar"

import "./Datepicker.scss"

const wait = (ms = 200) => new Promise(res => setTimeout(res, ms))

const getDate = date => date?.toDate() ?? null

let count = 0

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
  const inputRef = useRef()

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
          inputRef={inputRef}
          format="D MMM YYYY"
          weekStartDayIndex={1}
          // range
          // editable={false}
          rangeSeparator=" - "
          // numberOfMonths={2}
          allowInvalidDate
          value={date}
          renderMonthsYearsToggle={<MonthsYearsToggle />}
          // onlyMonthPicker
          onOpenPickNewDate={false}
          // onClose={() => false}
          // onBlur={e => {
          //   console.log(e)
          //   console.log(inputRef.current)
          // }}
          // onChanging={async res => {
          //   await wait(1000)
          //   if (count++ > 1) return false
          // }}
          // onChange={res => {
          //   if (Array.isArray(res)) return setDate([getDate(res[0]), getDate(res[1])])
          //   setDate(getDate(res))
          // }}
        />
      </div>
    </div>
  )
}

export default App
