import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Homepage} from '.'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Homepage} />
      </Switch>
    </Router>
  )
}

export default Routes
