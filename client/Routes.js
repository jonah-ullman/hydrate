import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Homepage, HydrationTracker} from './components'

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/hydrate" component={HydrationTracker} />
        <Route component={Homepage} />
      </Switch>
    </Router>
  )
}

export default Routes
