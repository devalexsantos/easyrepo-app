import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/app'
import Dashboard from './pages/dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
])
