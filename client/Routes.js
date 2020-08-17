import React, {useContext} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Homepage, HydrationTracker} from './components'
import {UserContext} from './context/user'

function Routes(props) {
  const {user} = useContext(UserContext)
  const loggedIn = !!user.id
  return (
    <Router>
      <Switch>
        {loggedIn && <Route path="/" component={HydrationTracker} />}
        <Route component={Homepage} />
      </Switch>
    </Router>
  )
}

export default Routes
