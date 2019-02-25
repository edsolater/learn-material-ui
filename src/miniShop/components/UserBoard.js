// 👌
import React from 'react'

import BaseBoard from './BaseUI/BaseBoard'
import BaseItem from './BaseUI/BaseItem'
import { ReactComponent as TrySvg } from '../SVGs/try.svg' //The `ReactComponent` import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename.

export default function UserBoard({ self: userBoard }) {
  return (
    <BaseBoard self={userBoard}>
      {/* <svg>
        <use href="#foo" />
      </svg> */}
      <TrySvg width="337px" height="295px" />
      {userBoard.items.map((item, index) => (
        <BaseItem key={String(index)} self={item} />
      ))}
    </BaseBoard>
  )
}
