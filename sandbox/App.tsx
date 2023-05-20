import { useState, useEffect, useRef } from "react"
import Datepicker from "../src/index"
import Toolbar from "../src/plugins/toolbar/toolbar"
import DateObject from "react-date-object"

import "./Datepicker.scss"

type DateVal = Date | null

const wait = (ms = 200) => new Promise(res => setTimeout(res, ms))

const getDate = (date: DateObject | null) => date?.toDate() ?? null

const App = () => {
  const pickerRef = useRef<any>()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [date, setDate] = useState<DateVal | DateVal[]>(null)

  useEffect(() => {
    pickerRef.current?.openCalendar?.()
  }, [])

  return (
    <div className="container">
      <h1>React-Multi-Date-Picker sandbox</h1>
      <div className="picker-wrap">
        <Datepicker
          ref={pickerRef}
          inputRef={inputRef}
          value={date}
          format="D MMM YYYY"
          weekStartDayIndex={1}
          dateSeparator=" - "
          monthYearSeparator={""}
          allowInvalidDate
          portal
          // clearBtn={false}
          // numberOfMonths={2}
          // range
          // editable={false}
          // onlyMonthPicker
          // onOpenPickNewDate={false}
          onChange={val => {
            if (Array.isArray(val)) {
              const start = getDate(val[0])
              const end = getDate(val[1])
              console.log(start, end)

              return setDate([start, end])
            }

            const date = getDate(val)
            console.log(date)
            setDate(date)
          }}
          // onClose={() => false}
          // onBlur={e => {
          //   console.log(e)
          // }}
          // onChanging={async date => {
          //   await wait(300)
          //   const res = Math.random() > 0.5
          //   console.log(date, res)
          //   return res
          // }}
        />
      </div>
    </div>
  )
}

export default App
