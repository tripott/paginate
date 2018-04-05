import React from 'react'
import { Link } from 'react-router-dom'

const MainFooter = props => {
  return (
    <footer className="h3 flex flex-row justify-between items-center bg-light-green">
      <div className="ml2 white">
        <Link className="link black-80" to="/profiles">
          <i className="db tc ion-person-stalker" />
          Profile
        </Link>
      </div>
      <div>
        <Link className="link black-80" to="/users">
          <i className="db tc ion-person" />
          Users
        </Link>
      </div>
      <div>
        <Link className="link black-80" to="/settings">
          <i className="db tc ion-gear-b" />
          Settings
        </Link>
      </div>
      <div className="mr2">
        <i className="db tc ion-stats-bars" />
        Activity
      </div>
    </footer>
  )
}

export default MainFooter
