import React from 'react'

export default function Phone(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.setStatus('activity')
  }

  return (
    <div>
      <div>Enter your phone number</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="xxx-xxx-xxxx"
          onChange={(event) => props.setPhone(event.target.value)}
        />
      </form>
    </div>
  )
}
