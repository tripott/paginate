import React from 'react'
import Icon from 'material-ui/Icon'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'

const PageNav = props => {
  const { page, pageCount, navPrev, navNext, limit } = props
  const prevDisabled = page === 1 ? true : false
  const nextDisabled = pageCount < limit ? true : false

  return (
    <div>
      <IconButton
        style={{
          margin: '20px'
        }}
        onClick={navPrev}
        disabled={prevDisabled}
        color="secondary"
        aria-label="Navigate Previous Page"
      >
        <Icon>navigate_before</Icon>
      </IconButton>
      <Button>Page: {page}</Button>
      <IconButton
        style={{
          margin: '20px'
        }}
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
