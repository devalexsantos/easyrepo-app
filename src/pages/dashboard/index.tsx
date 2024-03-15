import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { PlusCircle } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:flex-wrap">
      <Card className="w-ful overflow-clip md:w-[300px]">
        <CardHeader>
          <CardTitle>Cast Group</CardTitle>
          <CardDescription>Repositórios remotos da empresa</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-3">
          <span className="rounded-full bg-orange-600 py-1 px-2 text-white text-xs leading-none">
            3
          </span>
          <span className="text-sm text-muted-foreground">See all</span>
        </CardFooter>
      </Card>

      <Card className="w-ful overflow-clip md:w-[300px]">
        <CardHeader>
          <CardTitle>Login Informática</CardTitle>
          <CardDescription>Repositórios remotos da empresa</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-3">
          <span className="rounded-full bg-orange-600 py-1 px-2 text-white text-xs leading-none">
            3
          </span>
          <span className="text-sm text-muted-foreground">See all</span>
        </CardFooter>
      </Card>

      <Card className="w-ful overflow-clip md:w-[300px]">
        <CardHeader>
          <CardTitle>ETCWEB Digital</CardTitle>
          <CardDescription>Repositórios remotos da empresa</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-3">
          <span className="rounded-full bg-orange-600 py-1 px-2 text-white text-xs leading-none">
            3
          </span>
          <span className="text-sm text-muted-foreground">See all</span>
        </CardFooter>
      </Card>

      <Card className="w-ful overflow-clip md:w-[300px]">
        <CardHeader>
          <CardTitle>Adriano Costa Advocacia</CardTitle>
          <CardDescription>Repositórios remotos da empresa</CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center gap-3">
          <span className="rounded-full bg-orange-600 py-1 px-2 text-white text-xs leading-none">
            3
          </span>
          <span className="text-sm text-muted-foreground">See all</span>
        </CardFooter>
      </Card>
      <Card className="w-ful overflow-clip md:w-[300px] border-dashed">
        <CardHeader>
          <CardTitle className="text-center text-md text-muted-foreground">
            New Category
          </CardTitle>
          <CardDescription className="text-center">
            Add a new category
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-center gap-3">
          <PlusCircle size={32} />
        </CardFooter>
      </Card>
    </div>
  )
}
