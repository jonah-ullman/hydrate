import React, {useState, useContext} from 'react'
import {Activity, Weight, Texts} from '.'
import Axios from 'axios'
import {UserContext} from '../../context/user'

export default function Form(props) {
  const [weight, setWeight] = useState(null)
  const [activity, setActivity] = useState(null)
  const [phone, setPhone] = useState(null)
  const [textAlerts, setTextAlerts] = useState(false)
  const [textStart, setTextStart] = useState(null)
  const [textEnd, setTextEnd] = useState(null)
  const [status, setStatus] = useState('weight')
  const {setUser} = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const profile = {weight, activity, phone, textAlerts, textStart, textEnd}
    console.log(profile)
    // const updatedUser = await Axios.put('/api/users', profile)
    // setUser(updatedUser)
    // props.history.push('/hydrate')
  }

  return (
    <div id="form">
      {status === 'weight' && (
        <Weight setWeight={setWeight} setStatus={setStatus} />
      )}
      {status === 'activity' && (
        <Activity setActivity={setActivity} setStatus={setStatus} />
      )}
      {status === 'texts' && (
        <Texts
          setPhone={setPhone}
          setTextAlerts={setTextAlerts}
          setTextStart={setTextStart}
          setTextEnd={setTextEnd}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  )
}
