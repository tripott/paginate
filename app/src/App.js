import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Songs from './pages/songs'
import ProfileForm from './pages/profile/form'
import Profiles from './pages/profile'
import ProfileShow from './pages/profile/show'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Songs} />
          <Route path="/profiles/new" component={ProfileForm} />
          <Route path="/profiles/:id" component={ProfileShow} />
          <Route path="/profiles" component={Profiles} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
