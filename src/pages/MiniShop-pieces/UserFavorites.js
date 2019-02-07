import React from 'react'
import { makeStyles } from '@material-ui/styles'
//  the first Element should be root Element
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing.unit
    // marginBottom: '1rem'
  },
  avatarButton: {
    color: theme.palette.secondary.main,
    background: theme.palette.primary.main
  }
}))

export default function UserFavorites({
  stateValue: {
    boolean: { hasUserFavorites }
  }
}) {
  const classes = useStyles()
  return (
    <Drawer anchor="bottom" open={hasUserFavorites}>
      <div>
        <List>
          <ListItem botton>
            <ListItemText>hello</ListItemText>
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}
