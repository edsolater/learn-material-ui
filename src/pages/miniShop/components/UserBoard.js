// 👌
import React from 'react'

import BaseBoard from './BaseUI/BaseBoard'
import BaseItem from './BaseUI/BaseItem'

export default function UserBoard({ info: userBoard }) {
  return (
    <BaseBoard info={userBoard}>
      {userBoard.items.map((item, index) => (
        <BaseItem key={String(index)} info={item} />
      ))}
    </BaseBoard>
  )
}
