import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Routes from './Routes'
import './Style/reset.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
)
