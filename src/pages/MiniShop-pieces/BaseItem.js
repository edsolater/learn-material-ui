import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import Draggable from 'react-draggable'
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
    padding: 0,
    height: theme.spacing.unit * 8
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

export default function Items() {
  const classes = useStyles()
  const rootElement = React.createRef()
  React.useEffect(() => {
    console.log('rectBounding: ', rootElement.current.getBoundingClientRect())
  })
  function handle_DraggableStop() {
    console.log('rectBounding: ', rootElement.current.getBoundingClientRect())
  }
  function handle_MouseDown(e) {
    e.stopPropagation()
  }
  return (
    // need to config <Draggable>
    <Draggable bounds="parent" onStop={handle_DraggableStop} onMouseDown={handle_MouseDown}>
      <div label="refWrapper" ref={rootElement}>
        <Card className={classes.root}>
          <div className={classes.detail}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                Lizard
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                insect
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
