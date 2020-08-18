import React from 'react'

export default function Confirmation(props) {
  const {handleSubmit, profile} = props
  const {weight, activity, phone, textStart, textEnd} = profile
  return (
    <div>
      <div>
        You're almost ready to start hydrating. Does this look right to you?
      </div>
      <div>Weight: {weight}</div>
      <div>Activity per day: {activity} minutes</div>
      <div>Phone Number: {phone}</div>
      <div>I want to receive text alerts starting at: {textStart}</div>
      <div>I want to stop receiving text alerts starting at: {textEnd}</div>
      <div onClick={handleSubmit}>Yup, let's hydrate!</div>
    </div>
  )
}
