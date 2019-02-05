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

// 未来TODO：要把名字都集中到顶层的统一配置中
export function Categories({
  myProps: {
    computed: { symbols }
  },
  dispatchers: {
    enum: { changeCurrentSymbol }
  }
}) {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={24}>
        {symbols.map(symbol => (
          <Grid item container xs={4} lg={2} justify="center">
            <IconButton onClick={() => changeCurrentSymbol(symbol)}>
              <Avatar className={classes.avatarButton}>{symbol}</Avatar>
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
