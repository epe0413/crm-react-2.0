import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NewClient, { action as newClientAction} from './pages/NewClient'
import Index, { loader as clientesLoader } from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditClient, { loader as editClientLoader, action as editClientAction} from './pages/EditClient'
import {action as eliminarClienteAction} from './components/Cliente'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path:'/clients/new',
        element: <NewClient/>,
        action: newClientAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clients/:clientId/edit',
        element: <EditClient/>,
        loader: editClientLoader,
        action: editClientAction,
        errorElement: <ErrorPage/>,
      },
      {
        path: '/clientes/:clientId/eliminar',
        action: eliminarClienteAction
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
