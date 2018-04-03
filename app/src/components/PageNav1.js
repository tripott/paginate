import React from 'react'
import Button from 'material-ui/Button'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import { Link } from 'react-router-dom'
import { prop } from 'ramda'

const PageNav = props => {
  const goBack = props.history.goBack
  const goForward = props.history.goForward
  const push = props.history.push
  const replace = props.history.replace
  const go = props.history.go

  const startKey = props.startkey
  const prevStartKey = propOr(null, 'prevStartKey', props)
  const prevStartKeyQuery = prevStartKey ? `&startkey=${prevStartKey}` : ''

  const lastPageItemStartKey = prop(
    props.lastPageItemPropName,
    props.lastPageItem
  )
  console.log('PageNav lastPageItemStartKey', lastPageItemStartKey)

  const limit = props.limit
  //http://localhost:3000/?limit=3&startkey=song_fisher-man-dub
  return (
    <div>
      <IconButton
        onClick={e => {
          push(`\?limit=${limit}${prevStartKeyQuery}`)
        }}
        disabled={startKey ? false : true}
        color="secondary"
        aria-label="Navigate Previous Page"
      >
        <Icon>navigate_before</Icon>
      </IconButton>

      <IconButton
        onClick={e => {
          push(`\?startkey=${lastPageItemStartKey}&limit=${limit}`)
          go()
        }}
        color="secondary"
        aria-label="Navigate Next Page"
      >
        <Icon>navigate_next</Icon>
      </IconButton>
    </div>
  )
}

export default PageNav
