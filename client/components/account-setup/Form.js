import React, {useState, useContext} from 'react'
import {Input, Confirmation} from '.'
import Axios from 'axios'
import {UserContext} from '../../context/user'

const WEIGHT = 'weight'
const WEIGHT_PLACEHOLDER = '#'
const WEIGHT_LABEL = 'Enter your weight in pounds:'

const ACTIVITY = 'activity'
const ACTIVITY_PLACEHOLDER = '#'
const ACTIVITY_LABEL =
  'How much do you exercise per day on average, in minutes?'

const CONFIRMATION = 'confirmation'

export default function Form(props) {
  const [weight, setWeight] = useState(null)
  const [activity, setActivity] = useState(null)
  const [status, setStatus] = useState(WEIGHT)
  const {setUser} = useContext(UserContext)

  const profile = {
    weight,
    activity,
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
          setStatus={() => setStatus(CONFIRMATION)}
          label={ACTIVITY_LABEL}
          placeholder={ACTIVITY_PLACEHOLDER}
          onChange={(event) => setActivity(event.target.value)}
        />
      )}
      {status === CONFIRMATION && (
        <Confirmation profile={profile} handleSubmit={handleSubmit} />
      )}
    </div>
  )
}
