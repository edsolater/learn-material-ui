import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Paper, Grid, IconButton, Avatar } from '@material-ui/core'

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
export function Categories({toggler:{toggleCompareBoard, toggleShelf}}) {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={24}>
        <Grid item container xs={4} lg={2} justify="center">
          <IconButton onClick={toggleShelf}>
            <Avatar className={classes.avatarButton}>S</Avatar>
          </IconButton>
        </Grid>
        <Grid item container xs={4} lg={2} justify="center">
          <IconButton onClick={toggleCompareBoard}>
            <Avatar className={classes.avatarButton}>I</Avatar>
          </IconButton>
        </Grid>
        <Grid item container xs={4} lg={2} justify="center">
          <IconButton>
            <Avatar className={classes.avatarButton}>M</Avatar>
          </IconButton>
        </Grid>
        <Grid item container xs={4} lg={2} justify="center">
          <IconButton>
            <Avatar className={classes.avatarButton}>P</Avatar>
          </IconButton>
        </Grid>
        <Grid item container xs={4} lg={2} justify="center">
          <IconButton>
            <Avatar className={classes.avatarButton}>L</Avatar>
          </IconButton>
        </Grid>
        <Grid item container xs={4} lg={2} justify="center">
          <IconButton>
            <Avatar className={classes.avatarButton}>E</Avatar>
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

