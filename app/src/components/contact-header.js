import React from 'react'
import { Link } from 'react-router-dom'

import { propOr } from 'ramda'

const ContactHeader = props => {
  return (
    <header className="flex flex-row justify-between items-center bg-light-green h3">
      <div className="ml2">
        <i className="f3 ion-log-out" onClick={e => props.auth.logout()} />
      </div>
      <div>{props.title}</div>
      <div className="mr2">
        <Link className="link black-80" to={props.target}>
          {propOr('new', 'targetName', props)}
        </Link>
      </div>
    </header>
  )
}

export default ContactHeader
