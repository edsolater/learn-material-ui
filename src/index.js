import React from 'react'
import ReactDOM from 'react-dom'

import './bootstrap'

import GlobalTheme from './GlobalTheme'
import MiniShop from './pages/MiniShop'

ReactDOM.render(
  <GlobalTheme>
    <MiniShop />
  </GlobalTheme>,
  document.getElementById('root'),
)
