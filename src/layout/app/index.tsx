import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { LocalBar } from './components/LocalBar'

export default function AppLayout() {
  return (
    <div className="flex flex-col gap-3">
      <Header />
      <LocalBar />
      <main className="container max-w-6xl">
        <Outlet />
      </main>
    </div>
  )
}
