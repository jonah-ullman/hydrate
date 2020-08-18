import React from 'react'

export default function Texts(props) {
  const {setStatus, setTextAlerts, handleSubmit} = props

  return (
    <div>
      <div>Would you like us to remind you to stay hydrated via text?</div>
      <div
        onClick={() => {
          setTextAlerts(true)
          setStatus()
        }}
      >
        Yes
      </div>
      <div onClick={handleSubmit}>No</div>
    </div>
  )
}
