import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/user'
import Axios from 'axios'
import {calculateWaterIncrements} from '../utils'

function HydrationTracker() {
  const {user} = useContext(UserContext)
  const [today, setToday] = useState({})
  const increments = calculateWaterIncrements(user.waterTotal)
  console.log(increments)
  useEffect(() => {
    const fetchToday = async () => {
      const {data} = await Axios.get('/api/days/today')
      setToday(data)
    }
    fetchToday()
  }, [user])

  const addWater = async (ounces) => {
    const {data} = await Axios.put('/api/days/today', {toAdd: ounces})
    setToday(data)
  }

  return (
    <div id="tracker">
      <div id="tracker-column-left">
        <div>
          <div>Today's hydration goal:</div>
          <div>{user.waterTotal} oz.</div>
        </div>
        <div>
          <div>Your current total:</div>
          <div>{today.water} oz.</div>
        </div>
        <div>
          <div>Amount left to drink:</div>
          <div>{user.waterTotal - today.water} oz.</div>
        </div>
      </div>
      <div onClick={() => addWater(8)}>Add water</div>
    </div>
  )
}

export default HydrationTracker
