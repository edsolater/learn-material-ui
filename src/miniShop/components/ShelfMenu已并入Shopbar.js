import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Paper, Grid, IconButton, Avatar } from '@material-ui/core'

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

export default function Categories({
  localState: {
    collections: { shelfIDs }
  },
  setters: {
    enum: { setActiveShelfID }
  }
}) {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={24}>
        {shelfIDs.map(shelfID => (
          <Grid item container xs={4} lg={2} justify="center" key={shelfID}>
            <IconButton onClick={() => setActiveShelfID(shelfID)}>
              <Avatar className={classes.avatarButton}>{shelfID}</Avatar>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
