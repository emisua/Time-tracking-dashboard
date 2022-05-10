import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import './index.css'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <BrowserRouter basename={window.location.pathname || ''}>
    <Route exact path='/' component={App} />
  </BrowserRouter>
)
