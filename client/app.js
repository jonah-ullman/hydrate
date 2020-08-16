import React, {useState, useEffect} from 'react'
import Routes from './Routes'
import {UserContext} from './context/user'
import Axios from 'axios'

function App() {
  const [user, setUser] = useState({})
  // If there's a user on the session, set it as the UserContext value
  useEffect(() => {
    const getMe = async () => {
      const {data} = await Axios.get('/auth/me')
      if (data) {
        setUser(data)
      }
    }
    getMe()
  }, [])

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Routes />
    </UserContext.Provider>
  )
}

export default App
