import React from 'react'
import { makeStyles } from '@material-ui/styles'
//  the first Element should be root Element
import { Drawer, Paper, List, ListItem, ListItemText } from '@material-ui/core'

// direct styles in Home Page
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing.unit,
    margin: theme.spacing.unit
  },
  avatarButton: {
    color: theme.palette.secondary.main,
    background: theme.palette.primary.main
  }
}))

// 0 links
export function Favorites({
  myProps: {
    boolean: { hasFavorites }
  },
  dispatchers: {
    boolean: { toggleFavorites }
  }
}) {
  const classes = useStyles()
  return (
    // TODO：<Drawer> 好像需要覆写内部元素才能更改成透明的样子
    <Drawer
      anchor="top"
      open={hasFavorites}
      onClose={toggleFavorites}
      style={{ background: 'rgba(0,0,0,0)' }}
    >
      <Paper className={classes.paper}>
        <List>
          <ListItem botton>
            <ListItemText>hello</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Drawer>
  )
}
