import React from 'react'
import classnames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'inline-flex',
    padding: 0,
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
  },
  picture: {
    minWidth: 100,
    maxWidth: 140,
  },
}))

export default function ShelfS() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
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
  )
}
