import { useState, useEffect, useRef } from "react"
import Datepicker from "../src/index"
import Toolbar from "../src/plugins/toolbar/toolbar"
import DateObject from "react-date-object"

import Picker from "./Datepicker.ignore/Datepicker"
import DatePresets from "./Datepicker.ignore/DatePresets"

import "./Datepicker.scss"

type DateVal = Date | null

const wait = (ms = 200) => new Promise(res => setTimeout(res, ms))

const getDate = (date: Date | DateObject | null) => {
  if (date instanceof Date) return date
  return date?.toDate() ?? null
}

// const DatePresets = (props: any) => {
//   const { handleChange, state, DatePicker } = props

//   return (
//     <button
//       onClick={() => {
//         // const selectedDate = new DateObject()
//         const selectedDate = [new Date("2022-10-12"), new Date()]
//         // console.log(selectedDate?.toDate())

//         handleChange(selectedDate, { ...state, selectedDate })
//       }}
//       type="button"
//     >
//       Button
//     </button>
//   )
// }

const App = () => {
  const pickerRef = useRef<any>()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [date, setDate] = useState<DateVal | DateVal[]>(null)

  useEffect(() => {
    pickerRef.current?.openCalendar?.()
  }, [])

  // const pl = (
  //   <DatePresets
  //     // position="left"
  //     // isActive={(args) => console.log(args)}
  //   />
  // )

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
          // plugins={[pl]}
          // clearBtn={false}
          // numberOfMonths={2}
          range
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
            // console.log(date)
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
        <Picker
          value={date}
          onChange={val => {
            console.log(val)
            setDate(val)
          }}
          // plugins={[
          //   <DatePresets
          //     position="left"
          //     // isActive={(args) => console.log(args)}
          //   />,
          // ]}
          // ref={ref}
          // pickerRef={pickerRef}
          // onBlur={e => {
          //   console.log(e)
          // }}
          // onBeforeChange={async date => {
          //   console.log(date)
          //   await wait(1000)
          //   if (count++ > 1) return false
          // }}
          numberOfMonths={2}
          // editable={false}
          range
          // onClose={() => false}
          // portal
          // className="rmdp-input"
        />
      </div>
    </div>
  )
}

export default App
