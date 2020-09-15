import React from 'react'

export default function Input(props) {
  const {setStatus, label, placeholder, onChange} = props

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {label}
          <input type="text" placeholder={placeholder} onChange={onChange} />
        </label>
        <button type="submit" value="Submit">
          Next
        </button>
      </form>
    </div>
  )
}
