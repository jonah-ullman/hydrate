import React, {useState} from 'react'
import {Age} from '.'

export default function Form() {
  const [age, setAge] = useState(0)
  const [weight, setWeight] = useState(0)
  const [activity, setActivity] = useState('')
  const [phone, setPhone] = useState(0)
  const [textAlerts, setTextAlerts] = useState(false)
  const [status, setStatus] = useState('age')

  return (
    <div>
      {status === 'age' && <Age setAge={setAge} setStatus={setStatus} />}
    </div>
  )
}
