import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './layout/app'
import Dashboard from './pages/dashboard'
import { AllRepos } from './pages/all-repos'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/repos', element: <AllRepos /> },
    ],
  },
])
