import React from 'react'

import { MyAppBar, Board, Detail } from '../page-fragments'

export default function Shop() {
  const [hasDetail, toggleHasDetail] = React.useState(false)
  const [hasComparison, toggleHasComparison] = React.useState(false)

  return (
    <React.Fragment>
      <MyAppBar />
      <Board togglers={{ toggleHasComparison, toggleHasDetail }} />
      {hasDetail ? <Detail /> : null}
      {hasComparison ? <Detail /> : null}
    </React.Fragment>
  )
}
