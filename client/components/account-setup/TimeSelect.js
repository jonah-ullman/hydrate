import React from 'react'

export default function TimeSelect(props) {
  const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  return (
    <select onChange={(event) => props.setTextStart(event.target.value)}>
      {hours.map((hour) => (
        <option key={hour} value={hour}>
          {hour}
        </option>
      ))}
    </select>
  )
}
