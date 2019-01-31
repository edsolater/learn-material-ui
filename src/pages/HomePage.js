import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import { Paper, Grid, IconButton, Avatar } from '@material-ui/core'
// direct styles in Home Page
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing.unit,
    // marginBottom: '1rem'
  },
  avatarButton: {
    color: theme.palette.secondary.main,
    background: theme.palette.primary.main,
  },
}))

// 0 links
export function HomePage(props) {
  const classes = useStyles()
  const {ToS} = props.links || {}
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={24}>
        <Grid item container xs={4} justify="center" alignItems="center">
          <IconButton component={ToS}>
            <Avatar className={classes.avatarButton}>S</Avatar>
          </IconButton>
        </Grid>
        <Grid item container xs={4} justify="center">
          <IconButton>
            <Avatar className={classes.avatarButton}>i</Avatar>
          </IconButton>
        </Grid>
        <Grid item container xs={4} justify="center" alignItems="center">
          <IconButton>
            <Avatar className={classes.avatarButton}>m</Avatar>
          </IconButton>
        </Grid>
        <Grid item container xs={4} justify="center" alignItems="center">
          <IconButton>
            <Avatar className={classes.avatarButton}>p</Avatar>
          </IconButton>
        </Grid>
        <Grid item container xs={4} justify="center" alignItems="center">
          <IconButton>
            <Avatar className={classes.avatarButton}>l</Avatar>
          </IconButton>
        </Grid>
        <Grid item container xs={4} justify="center" alignItems="center">
          <IconButton>
            <Avatar className={classes.avatarButton}>e</Avatar>
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

// react-router's Link
export const ToHome = props => <RouteLink to="/" {...props} />
