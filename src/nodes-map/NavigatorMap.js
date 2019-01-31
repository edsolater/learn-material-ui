import React from 'react'
import { Route } from 'react-router-dom'

import {
  NavigatorUI,
  BoardUI,
  BoardLink,
  SPageUI,
  SPageLink,
  DetailUI,
  DetailLink,
} from '../pages'
import state from '../GlobalState'

export function NavigatorMap(props) {
  return (
    <React.Fragment>
      <NavigatorUI
        links={{
          BoardLink,
          DetailLink,
        }}
      />
      <Route path="/" component={LinkedBoardUI} />
      <Route path="/S" component={SPageUI} />
      <Route path="/detail" component={DetailUI} />
    </React.Fragment>
  )
}

const LinkedBoardUI = () =><BoardUI state={state} links={{ SPageLink }}/>
const LinkedSPageUI = () =><SPageUI state={state} />
const LinkedDetailUI = () =><DetailUI state={state} />
