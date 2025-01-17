import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import MainContainer from './component/MainContainer.jsx'
import ResDisplay from './component/ResponseDisplay/ResDisplay.jsx'
import ResHistory from './component/ResponseHistory/ResHistory.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route path='' element={<MainContainer />} />
    <Route path='idea' element={<ResDisplay />} />
    <Route path='history' element={<ResHistory />} />
  
  </Route> 
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} /> 
  </StrictMode>,
)
