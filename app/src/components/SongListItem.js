import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import {
  toLower,
  split,
  head,
  compose,
  toUpper,
  slice,
  join,
  drop,
  contains
} from 'ramda'

const SongListItem = props => {
  const { _id, title, artist, album, genre } = props.song

  const removeArticles = arrWords => {
    return contains(head(arrWords), ['the', 'a', 'an'])
      ? drop(1, arrWords)
      : arrWords
  }

  const avatarLetter = compose(
    toUpper,
    slice(0, 1),
    join(' '),
    removeArticles,
    split(' '),
    toLower
  )(title)

  return (
    <Link
      to={`/songs/${_id}`}
      style={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      <ListItem>
        <Avatar>{avatarLetter}</Avatar>
        <ListItemText
          style={{ marginLeft: '15px' }}
          primary={title}
          secondary={`${artist} | ${album} | ${genre}`}
        />
      </ListItem>

      <Divider />
    </Link>
  )
}

export default SongListItem
