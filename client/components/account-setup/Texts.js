import React, {useState} from 'react'
import {TimeSelect} from '.'

export default function Texts(props) {
  const {
    setPhone,
    setTextAlerts,
    setTextStart,
    setTextEnd,
    handleSubmit,
  } = props
  const [displayTextForm, setDisplayTextForm] = useState(false)

  return (
    <div>
      <div>Would you like us to remind you to stay hydrated via text?</div>
      <div
        onClick={() => {
          setDisplayTextForm(true)
          setTextAlerts(true)
        }}
      >
        Yes
      </div>
      <div onClick={handleSubmit}>No</div>
      {displayTextForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#"
            onChange={(event) => setPhone(event.target.value)}
          />
          <TimeSelect setTime={setTextStart} />
          <TimeSelect setTime={setTextEnd} />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      )}
    </div>
  )
}
