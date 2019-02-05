import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Avatar } from '@material-ui/core'

// direct styles in Home Page
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing.unit,
    color: theme.palette.secondary.main,
    background: theme.palette.primary.main,
  },
}))

// 0 links
export default function CategoriesAvatar({
  enumState: { currentSymbol: avatarLetter },
}) {
  const classes = useStyles()
  const discription = avatarLetter.toUpperCase()
  return <Avatar className={classes.root}>{discription}</Avatar>
}
