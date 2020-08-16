import React, {useContext} from 'react'
import {UserContext} from '../context/user'

function HydrationTracker() {
  const {user} = useContext(UserContext)
  console.log(user)
  return <div>Tracker!</div>
}

export default HydrationTracker
