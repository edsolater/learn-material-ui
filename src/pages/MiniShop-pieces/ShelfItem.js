// TODO: 暂且取名为 ShelfItem ，之后需改名为 Item。这是 Item存在于哪里的问题

import React from 'react'
import BaseItem from './BaseItem'

export default function ShelfItem({ children, ...restProps }) {
  return <BaseItem {...restProps}>{children}</BaseItem>
}
