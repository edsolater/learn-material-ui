import React from 'react'
import { makeStyles } from '@material-ui/styles'
//  the first Element should be root Element
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'

// direct styles in Home Page
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

// 0 links
export function UserCart({
  state: {
    boolean: { hasUserCart }
  }
}) {
  const classes = useStyles()
  return (
    <Drawer anchor="bottom" open={hasUserCart}>
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
