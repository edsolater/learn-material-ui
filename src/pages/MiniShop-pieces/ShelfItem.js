import React from 'react'
import BaseItem from './BaseItem'

export default function ShelfItem({ children, ...restProps }) {
  return <BaseItem {...restProps}>{children}</BaseItem>
}
