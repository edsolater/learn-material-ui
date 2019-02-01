import React from 'react'

import {
  MyAppBar,
  Favorites,
  Categories,
  Shelf,
  Comparison,
  UserCart
} from './shop-fragment'

export default function MiniShop() {
  const [hasShelf, toggleShelf] = React.useState(false)
  const [hasComparison, toggleComparison] = React.useState(false)
  const [hasUserCart, toggleUserCart] = React.useState(false)
  const [hasFavorites, toggleFavorites] = React.useState(false)

  return (
    <React.Fragment>
      <MyAppBar
        toggler={{
          toggleFavorites,
          toggleUserCart
        }}
      />
      <Favorites state={hasFavorites} />
      <Categories
        toggler={{
          toggleComparison,
          toggleShelf
        }}
      />
      <Shelf state={hasShelf} />
      <Comparison state={hasComparison} />
      <UserCart state={hasUserCart} />
    </React.Fragment>
  )
}
