// imported in ../ShelfBoard.js
import React from 'react'

import AddItemInShelf from './createButton__AddItemInShelf'
import AddUserBoard from './createButton__AddUserBoard'

const collections = {
  add_item_in_shelf: <AddItemInShelf />,
  add_user_board: <AddUserBoard />
}

export default aim => collections[aim]
