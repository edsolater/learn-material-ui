import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './bootstrap'

import GlobalTheme from './GlobalTheme'
import { NavigatorMap as Entrance } from './nodes-map'

ReactDOM.render(
  <Router>
    <GlobalTheme>
      <Entrance />
    </GlobalTheme>
  </Router>,
  document.getElementById('root'),
)
