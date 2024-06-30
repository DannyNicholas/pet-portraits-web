import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import 'semantic-ui-css/semantic.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.tsx'
import Gallery from './pages/Gallery.tsx'
import Home from './pages/Home.tsx'
import Prices from './pages/Prices.tsx'
import Contact from './pages/Contact.tsx'
import About from './pages/About.tsx'
import { ABOUT_ROUTE, CONTACT_ROUTE, GALLERY_ROUTE, HOME_ROUTE, PRICES_ROUTE } from './constants/Constants.ts'

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: HOME_ROUTE,
        element: <Home />,
      },
      {
        path: GALLERY_ROUTE,
        element: <Gallery />,
      },
      {
        path: PRICES_ROUTE,
        element: <Prices />,
      },
      {
        path: CONTACT_ROUTE,
        element: <Contact />,
      },
      {
        path: ABOUT_ROUTE,
        element: <About />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
