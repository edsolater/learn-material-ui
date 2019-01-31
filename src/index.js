import React from 'react'
import ReactDOM from 'react-dom'

import './bootstrap'

import GlobalTheme from './GlobalTheme'
import Shop from './pages/Shop'

ReactDOM.render(
  <GlobalTheme>
    <Shop />
  </GlobalTheme>,
  document.getElementById('root'),
)
