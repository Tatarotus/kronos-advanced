import React from "react"
import Months from "./months"
import "../assets/styles/main.css"
const exampleArray = [
  [
    [["jan"], ["fev"], ["march"]],
    [["apr"], ["may"], ["jun"]],
    [["june"], ["aug"], ["sep"]],
    [["oct"], ["nov"], ["dec"]],
  ],

  [],
  [],
  [],
  [],
  [],
  [],
]

export default function Home() {
  const [DOMDisplay, setDOMDisplay] = React.useState(getYears)
  const [test, setTest] = React.useState([])
  function getYears() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="flex">
          {exampleArray.map((year, index) => (
            <div
              onClick={() => handleDisplayMonth({ year, index })}
              key={index}
              props={year}
              className="bg-gray-700 p-4 m-4 font-bold text-white cursor-pointer hover:bg-gray-600;"
            >{`202${index}`}</div>
          ))}
        </div>
      </div>
    )
  }

  const handleDisplayMonth = ({ year, index }) => {
    function getQuarters() {
      return (
        <div className="flex justify-center itens-center w-screen h-screen flex-col">
          {year.map((quarter, index) => (
            <div key={index} className="flex bg-red-200 p-4 m-4">
              {quarter.map((month, index) => (
                <div className="bg-blue-200 p-4 m-4" key={index}>
                  {month}
                </div>
              ))}
            </div>
          ))}
        </div>
      )
    }
    setDOMDisplay(getQuarters)
    //setDOMDisplay(<pre>{JSON.stringify(year, null, 2)}</pre>)
  }

  return DOMDisplay
}
