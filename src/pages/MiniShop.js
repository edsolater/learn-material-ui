import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  MyAppBar,
  Favorites,
  Categories,
  Shelf,
  CompareBoard,
  UserCart
} from './MiniShop-fragment'

const useStyles = makeStyles(theme =>
  // console.log(theme),
  ({
    ['spacebox-below-appbar']: {
      // 需要获取appbar的高度，动态地设定值
      height: theme.spacing.unit * 10
    },
    flexbox: {
      display: 'flex',
      position: 'relative',
      width: '100%'
    },
    shelf: {
      flex: '1'
    },
    ['spacebox-in-flexbox']: {
      width: theme.spacing.gutter
    },
    CompareBoard: {
      flex: '1'
    }
  })
)

// container component
export default function MiniShop() {
  const classes = useStyles()
  const [hasShelf, toggleShelf] = React.useToggle(false)
  const [hasCompareBoard, toggleCompareBoard] = React.useToggle(false)
  const [hasUserCart, toggleUserCart] = React.useToggle(false)
  const [hasFavorites, toggleFavorites] = React.useToggle(false)

  return (
    <React.Fragment>
      <MyAppBar
        id="appbar"
        className={classes.appbar}
        toggler={{
          toggleFavorites,
          toggleUserCart
        }}
        appbarPosition="fixed"
      />
      <div role="spacebox" className={classes['spacebox-below-appbar']} />
      <Favorites state={{ hasFavorites }} toggler={{ toggleFavorites }} />
      <Categories
        toggler={{
          toggleCompareBoard,
          toggleShelf
        }}
      />
      <div role="flexbox" className={classes.flexbox}>
        <Shelf className={classes.shelf} state={{ hasShelf }} />
        <div role="spacebox" className={classes['spacebox-in-flexbox']} />
        <CompareBoard className={classes.CompareBoard} state={{ hasCompareBoard }} />
      </div>
      <UserCart state={{ hasUserCart }} />
    </React.Fragment>
  )
}
