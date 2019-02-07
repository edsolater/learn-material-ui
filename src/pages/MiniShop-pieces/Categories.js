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

export function Categories({
  state: {
    collections: { symbols }
  },
  setters: {
    enum: { changeCurrentSymbol }
  }
}) {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={24}>
        {symbols.map(symbol => (
          <Grid item container xs={4} lg={2} justify="center" key={symbol}>
            <IconButton onClick={() => changeCurrentSymbol(symbol)}>
              <Avatar className={classes.avatarButton}>{symbol}</Avatar>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}