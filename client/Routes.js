import React, {useContext} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Homepage, HydrationTracker} from './components'
import {UserContext} from './context/user'
import {Form} from './components/account-setup'

function Routes() {
  const {user} = useContext(UserContext)
  const loggedIn = !!user.id
  const hasProfile = !!user.hasProfile
  return (
    <Router>
      <Switch>
        {loggedIn && hasProfile && <Route component={HydrationTracker} />}
        {loggedIn && !hasProfile && <Route component={Form} />}
        <Route component={Homepage} />
      </Switch>
    </Router>
  )
}

export default Routes
