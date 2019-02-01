import React from 'react'
import ReactDOM from 'react-dom'

import './html-body.css'
import './bootstrap-Material-UI'
import './bootstrap-React'

import GlobalTheme from './GlobalTheme'
import MiniShop from './pages/MiniShop'

ReactDOM.render(
  <GlobalTheme>
    <MiniShop />
  </GlobalTheme>,
  document.getElementById('root'),
)
