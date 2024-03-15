import { BookMarked, FolderClosed } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export function LocalBar() {
  const location = useLocation()

  const pathname = location.pathname

  return (
    <div className="container max-w-6xl">
      <div className="flex items-center gap-6 p-4">
        <Link
          to="/"
          className={`flex items-center gap-2 pb-2 ${pathname === '/' && 'border-b-2 border-b-orange-600'}`}
        >
          <FolderClosed strokeWidth={1} />
          <span>Categories</span>
          <span className="rounded-full bg-primary py-1 px-2 text-secondary text-xs leading-none">
            3
          </span>
        </Link>

        <Link
          to="/repos"
          className={`flex items-center gap-2 pb-2 ${pathname === '/repos' && 'border-b-2 border-b-orange-600'}`}
        >
          <BookMarked strokeWidth={1} />
          <span>All Repos</span>
          <span className="rounded-full bg-primary py-1 px-2 text-secondary text-xs leading-none">
            24
          </span>
        </Link>
      </div>
    </div>
  )
}
