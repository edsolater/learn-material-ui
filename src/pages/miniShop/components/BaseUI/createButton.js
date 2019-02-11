// imported in ../ShelfBoard.js
import React from 'react'

import AddItemInShelf from './BaseButton__addItemInShelf'
import AddUserBoard from './BaseButton__addUserBoard'

const collections = {
  add_item_in_shelf: <AddItemInShelf />,
  add_user_board: <AddUserBoard />
}

export default aim => collections[aim]
