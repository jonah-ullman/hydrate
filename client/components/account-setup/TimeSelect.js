import React, {useState} from 'react'

export default function TimeSelect(props) {
  const hours = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ]
  const minutes = ['00', '15', '30', '45']
  const [hour, setHour] = useState('01')
  const [minute, setMinute] = useState('00')
  const [meridiem, setMeridiem] = useState('AM')

  const handleChange = (event, localStateCallback) => {
    localStateCallback(event.target.value)
    const time = `${hour}:${minute}:${meridiem}`
    props.setTime(time)
  }

  return (
    <div>
      <select onChange={(event) => handleChange(event, setHour)}>
        {hours.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
      <select onChange={(event) => handleChange(event, setMinute)}>
        {minutes.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
      <select onChange={(event) => handleChange(event, setMeridiem)}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  )
}
