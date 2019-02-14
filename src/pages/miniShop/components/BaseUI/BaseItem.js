// 👌
import React from 'react'
import Draggable from 'react-draggable'
import { makeStyles } from '@material-ui/styles'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    padding: 0,
    height: theme.spacing.unit * 15
  },
  detail: {
    display: 'flex',
    flexDirection: 'column'
  },
  picture: {
    minWidth: 100,
    maxWidth: 140
  }
}))

export default function BaseItem({ self, activeUserBoard }) {
  const classes = useStyles()
  let rootElement
  function handle_DraggableStop() {
    // 
    // const rootRect = rootElement.getBoundingClientRect()
    // if (rootRect.)
  }
  const handleDoubleClick = () => {
    if (activeUserBoard) self.copyTo(activeUserBoard)
  }
  return (
    // need to config <Draggable>
    <Draggable
      onStop={handle_DraggableStop}
      onMouseDown={e => e.stopPropagation()}
    >
      <div
        label="bounding"
        ref={el => (rootElement = el)}
        onDoubleClick={handleDoubleClick}
      >
        <Card className={classes.root}>
          <div className={classes.detail}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {self.title.slice(0, 6)}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {self.subtitle.slice(0, 6)}
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.picture}
            image="/favicon.ico"
            title="favicon"
          />
        </Card>
      </div>
    </Draggable>
  )
}
