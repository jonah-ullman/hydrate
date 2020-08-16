import React, {useContext} from 'react'
import {UserContext} from '../context/user'
import Axios from 'axios'

function HydrationTracker() {
  const {user} = useContext(UserContext)
  return (
    <>
      <div onClick={() => Axios.get('/api/days/today')}>Test sessions</div>
      <div>Tracker!</div>
    </>
  )
}

export default HydrationTracker
