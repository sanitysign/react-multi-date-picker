import { useState, useEffect, useRef } from "react"
import Datepicker from "../src/index"
// import Toolbar from "../src/plugins/toolbar/toolbar"
import DateObject from "react-date-object"

import { getAllDatesInRange } from "src"

import "./Datepicker.scss"

type DateVal = Date | null

const wait = (ms = 200) => new Promise(res => setTimeout(res, ms))

const getDate = (date: DateObject | null) => date?.toDate() ?? null

let count = 0
const daty = new DateObject({
  date: new Date("2020-10-15"),
})
console.log(daty.toDate())

const App = () => {
  const ref = useRef<any>()
  const inputRef = useRef()

  const [date, setDate] = useState<DateObject | DateObject[] | null>(null)

  useEffect(() => {
    ref.current.openCalendar()
  }, [])

  return (
    <div className="container">
      <h1>React-Multi-Date-Picker sandbox</h1>
      <div className="picker-wrap">
        <Datepicker
          ref={ref}
          // numberOfMonths={2}
          // inputRef={inputRef}
          format="D MMM YYYY"
          weekStartDayIndex={1}
          // range
          // editable={false}
          dateSeparator=" - "
          // numberOfMonths={2}
          // allowInvalidDate
          value={date}
          // onlyMonthPicker
          onOpenPickNewDate={false}
          monthYearSeparator=""
          // onClose={() => false}
          // onBlur={e => {
          //   console.log(e)
          //   console.log(inputRef.current)
          // }}
          // onChanging={async res => {
          //   await wait(100)
          //   if (count++ > 1) return false
          // }}
          onChange={val => {
            setDate(date)
          }}
        />
      </div>
    </div>
  )
}

export default App
