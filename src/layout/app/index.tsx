import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export default function AppLayout() {
  return (
    <>
      <Header />
      <main className="container max-w-6xl">
        <Outlet />
      </main>
    </>
  )
}
