import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Songs from './pages/songs'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Songs} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
