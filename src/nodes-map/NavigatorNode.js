import React from 'react'
import { Route } from 'react-router-dom'

import {
  NavigatorPage,
  HomePage,
  ToHome,
  SPage,
  ToS,
  DetailPage,
  ToDetail,
} from '../pages'

export function NavigatorNode(props) {
  return (
    <React.Fragment>
      <NavigatorPage
        links={{
          ToHome,
          ToDetail,
        }}
      />
      <br />
      <Route path="/" component={() => <HomePage links={{ ToS }} />} />
      <Route path="/S" component={SPage} />
      <Route path="/detail" component={DetailPage} />
    </React.Fragment>
  )
}
