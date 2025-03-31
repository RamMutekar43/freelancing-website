import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider'
import { BrowserRouter } from 'react-router-dom'
// import { JobProvider } from './Context/JobContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JobProvider> */}
    <BrowserRouter>
    <Provider>
    <App />
    </Provider>
    </BrowserRouter>
    {/* </JobProvider> */}
  </StrictMode>,
)
