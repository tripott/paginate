import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

const PageNav = props => {
  const { currentUrlStartKey, nextStartKey, navPrev, navNext } = props

  //http://localhost:3000/?limit=3&startkey=song_fisher-man-dub
  return (
    <div>
      <IconButton
        onClick={navPrev}
        disabled={currentUrlStartKey ? false : true}
        color="secondary"
        aria-label="Navigate Previous Page"
      >
        <Icon>navigate_before</Icon>
      </IconButton>

      <IconButton
        onClick={navNext}
        color="secondary"
        disabled={nextStartKey ? false : true}
        aria-label="Navigate Next Page"
      >
        <Icon>navigate_next</Icon>
      </IconButton>
    </div>
  )
}

export default PageNav
