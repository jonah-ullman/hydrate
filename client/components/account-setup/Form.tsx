import React, {useState, useContext} from 'react'
import {Texts, TimeSelect, Input, Confirmation} from '.'
import Axios from 'axios'
import {UserContext} from '../../context/user'

const WEIGHT = 'weight'
const WEIGHT_PLACEHOLDER = '#'
const WEIGHT_LABEL = 'Enter your weight in pounds:'

const ACTIVITY = 'activity'
const ACTIVITY_PLACEHOLDER = '#'
const ACTIVITY_LABEL =
  'How much do you exercise per day on average, in minutes?'

const PHONE = 'phone'
const PHONE_PLACEHOLDER = 'xxx-xxx-xxxx'
const PHONE_LABEL = 'Enter your phone number:'

const TEXTALERTS = 'textAlerts'

const TEXTSTART = 'textStart'
const TEXTSTART_LABEL = 'When would you like to start receiving texts?'

const TEXTEND = 'textEnd'
const TEXTEND_LABEL = 'When would you like to stop receiving texts?'

const CONFIRMATION = 'confirmation'

export default function Form(props) {
  const [weight, setWeight] = useState(null)
  const [activity, setActivity] = useState(null)
  const [phone, setPhone] = useState(null)
  const [textAlerts, setTextAlerts] = useState(false)
  const [textStart, setTextStart] = useState(null)
  const [textEnd, setTextEnd] = useState(null)
  const [status, setStatus] = useState(WEIGHT)
  const {setUser} = useContext(UserContext)

  const profile = {
    weight,
    activity,
    phone,
    textAlerts,
    textStart,
    textEnd,
    hasProfile: true,
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await Axios.put('/api/users', profile)
    const updatedUser = response.data
    setUser(updatedUser)
    props.history.push('/hydrate')
  }

  return (
    <div id="form">
      {status === WEIGHT && (
        <Input
          setStatus={() => setStatus(ACTIVITY)}
          label={WEIGHT_LABEL}
          placeholder={WEIGHT_PLACEHOLDER}
          onChange={(event) => setWeight(event.target.value)}
        />
      )}
      {status === ACTIVITY && (
        <Input
          setStatus={() => setStatus(TEXTALERTS)}
          label={ACTIVITY_LABEL}
          placeholder={ACTIVITY_PLACEHOLDER}
          onChange={(event) => setActivity(event.target.value)}
        />
      )}
      {status === TEXTALERTS && (
        <Texts
          setStatus={() => setStatus(PHONE)}
          setTextAlerts={setTextAlerts}
          handleSubmit={handleSubmit}
        />
      )}
      {status === PHONE && (
        <Input
          setStatus={() => setStatus(TEXTSTART)}
          label={PHONE_LABEL}
          placeholder={PHONE_PLACEHOLDER}
          onChange={(event) => setPhone(event.target.value)}
        />
      )}
      {status === TEXTSTART && (
        <TimeSelect
          label={TEXTSTART_LABEL}
          handleSubmit={(event, time) => {
            event.preventDefault()
            setTextStart(time)
            setStatus(TEXTEND)
          }}
        />
      )}
      {status === TEXTEND && (
        <TimeSelect
          label={TEXTEND_LABEL}
          handleSubmit={(event, time: string) => {
            event.preventDefault()
            setTextEnd(time)
            setStatus(CONFIRMATION)
          }}
        />
      )}
      {status === CONFIRMATION && (
        <Confirmation profile={profile} handleSubmit={handleSubmit} />
      )}
    </div>
  )
}
