import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import ThemeProvider from './contexts/ThemeProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
