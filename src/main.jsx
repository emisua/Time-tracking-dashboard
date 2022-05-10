import { createRoot } from 'react-dom/client'
import BrowserRouter from 'react-router-dom/BrowserRouter'

import App from './App'
import './index.css'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
)
