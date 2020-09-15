import React from 'react'

export default function Weight(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.setStatus()
  }

  return (
    <div>
      <div>Enter your weight in pounds</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="lb"
          onChange={(event) => props.setWeight(event.target.value)}
        />
      </form>
    </div>
  )
}
