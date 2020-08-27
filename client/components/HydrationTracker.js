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
      <div id="tracker-column-left">
        <ul>
          <li>
            <h2>Goal</h2>
            <p>{user.waterTotal} oz.</p>
          </li>
          <li>
            <h2>Current</h2>
            <p>{today.water} oz.</p>
          </li>
          <li>
            <h2>Left</h2>
            <p>
              {user.waterTotal <= today.water
                ? 0
                : user.waterTotal - today.water}{' '}
              oz.
            </p>
          </li>
        </ul>
      </div>
      <div id="tracker-column-mid">
        <div id="cup">
          <div id="water" style={{height: `${percent}%`}}></div>
        </div>
      </div>
      <div id="tracker-column-right">
        <button className="add-water" type="button" onClick={() => addWater(8)}>
          <h2>Add Water</h2>
          <p>8 oz.</p>
        </button>
        <button
          className="add-water"
          type="button"
          onClick={() => addWater(16)}
        >
          <h2>Add Water</h2>
          <p>16 oz.</p>
        </button>
      </div>
    </div>
  )
}

export default HydrationTracker
