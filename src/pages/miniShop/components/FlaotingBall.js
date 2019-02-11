import React from 'react'
//  the first Element should be root Element
// TODO: 改成 FAB 的组件
import { Drawer, Paper, List, ListItem, ListItemText } from '@material-ui/core'

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

export default function Favorites({
  stateValue: {
    boolean: { hasFavorites }
  },
  setters: {
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
