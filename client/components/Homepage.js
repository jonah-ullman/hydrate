import React, {useContext} from 'react'
import {UserContext} from '../context/user'
import Axios from 'axios'

function Homepage(props) {
  const {setUser} = useContext(UserContext)
  const testLogin = async () => {
    const {data: user} = await Axios.get('/auth/test')
    setUser(user)
  }

  return (
    // <form method="get" action="/auth/google">
    //   <button type="submit">Login With Google</button>
    // </form>
    <div onClick={testLogin}>Test Login</div>
  )
}

export default Homepage
