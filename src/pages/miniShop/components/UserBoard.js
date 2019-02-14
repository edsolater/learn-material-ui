// 👌
import React from 'react'

import BaseBoard from './BaseUI/BaseBoard'
import BaseItem from './BaseUI/BaseItem'

export default function UserBoard({ self: userBoard }) {
  return (
    <BaseBoard self={userBoard}>
      {userBoard.items.map((item, index) => (
        <BaseItem key={String(index)} self={item} />
      ))}
    </BaseBoard>
  )
}
