import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = props => {
  return (
    <header className="flex flex-row justify-between items-center bg-light-green h3">
      <div className="ml2">
        <i className="f3 ion-log-out" />
      </div>
      <div>{props.title}</div>
      <div className="mr2">
        <Link className="link black-80" to={props.target}>
          new
        </Link>
      </div>
    </header>
  )
}

export default MainHeader
