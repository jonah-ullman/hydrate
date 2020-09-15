import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/user'
import Axios from 'axios'
import {calculateWaterIncrements} from '../utils'

function HydrationTracker() {
  const {user} = useContext(UserContext)
  const [today, setToday] = useState({})
  const increments = calculateWaterIncrements(user.waterTotal)
  const percent = (today.water / user.waterTotal) * 100

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
      <div id="daily-goal">
        <h2>{`Daily Goal: ${user.waterTotal}oz`}</h2>
      </div>
      <div id="tracker-column-mid">
        <div id="cup">
          <div id="water" style={{height: `${percent}%`}}></div>
          <div id="water-label">{`${today.water}oz | ${Math.round(
            percent
          )}%`}</div>
        </div>
      </div>
      <div id="buttons-container">
        <button className="button" type="button" onClick={() => addWater(8)}>
          <h2>Add</h2>
          <p>8 oz.</p>
        </button>
        <button className="button" type="button" onClick={() => addWater(16)}>
          <h2>Add</h2>
          <p>16 oz.</p>
        </button>
        <button className="button" type="button" onClick={() => addWater(16)}>
          <h2>Add</h2>
          <p>16 oz.</p>
        </button>
        <button className="button" type="button" onClick={() => addWater(-8)}>
          <h2>Remove</h2>
          <p>8 oz.</p>
        </button>
      </div>
    </div>
  )
}

export default HydrationTracker
