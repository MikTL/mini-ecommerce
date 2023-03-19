import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvideer } from './context/filters'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvideer>
    <App />
  </FiltersProvideer>
)
