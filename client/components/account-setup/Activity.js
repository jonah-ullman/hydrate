import React from 'react'

export default function Activity(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.setStatus('texts')
  }

  return (
    <div>
      <div>How much do you exercise per day on average, in minutes?</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="#"
          onChange={(event) => props.setActivity(event.target.value)}
        />
      </form>
    </div>
  )
}
