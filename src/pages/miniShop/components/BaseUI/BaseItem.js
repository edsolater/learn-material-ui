import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Draggable from 'react-draggable'
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

export default function Item({
  setters: { copyShelfItem } ={},
  itemID,
  title = 'default title',
  subtitle = 'insert subtitle here'
}) {
  const classes = useStyles()
  let rootElement
  function handle_DraggableStop() {
    // console.log('rectBounding: ', rootElement.current.getBoundingClientRect())
    // const rootRect = rootElement.getBoundingClientRect()
    // if (rootRect.)
  }

  return (
    // need to config <Draggable>
    <Draggable onStop={handle_DraggableStop} onMouseDown={e => e.stopPropagation()}>
      <div
        label="bounding"
        ref={el => (rootElement = el)}
        onDoubleClick={() => copyShelfItem({ itemID, targetID: '0000' })}
      >
        <Card className={classes.root}>
          <div className={classes.detail}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {title.slice(0, 6)}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {subtitle.slice(0, 6)}
              </Typography>
            </CardContent>
          </div>
          <CardMedia className={classes.picture} image="/favicon.ico" title="favicon" />
        </Card>
      </div>
    </Draggable>
  )
}
