import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'

const PageNav = props => {
  // const { currentUrlStartKey, nextStartKey, navPrev, navNext } = props
  const { page, pageCount, navPrev, navNext } = props
  const prevDisabled = page === 1 ? true : false
  const nextDisabled = pageCount === 0 ? true : false

  // const prevDisabled = currentUrlStartKey ? false : true
  // const nextDisabled = nextStartKey ? false : true
  // http://localhost:3000/?limit=3&startkey=song_fisher-man-dub
  console.log('PageNav pageCount', pageCount)
  console.log('PageNav nextDisabled', nextDisabled)

  return (
    <div>
      <IconButton
        onClick={navPrev}
        disabled={prevDisabled}
        color="secondary"
        aria-label="Navigate Previous Page"
      >
        <Icon>navigate_before</Icon>
      </IconButton>

      <IconButton
        onClick={navNext}
        color="secondary"
        disabled={nextDisabled}
        aria-label="Navigate Next Page"
      >
        <Icon>navigate_next</Icon>
      </IconButton>
    </div>
  )
}

export default PageNav
