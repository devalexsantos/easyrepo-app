import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { LogOut, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="p-4 border-b flex flex-col gap-2">
      <div className="container max-w-6xl flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Button variant="ghost" size="icon">
              <Menu size={24} />
            </Button>
            <span className="text-xl font-bold italic">easyrepos</span>
          </div>
          <div className="flex items-center gap-3">
            <ModeToggle />
            <Button variant="outline" className="flex items-center gap-2">
              <LogOut size={18} /> Log Out
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
