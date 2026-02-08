import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Button } from '@/components/ui/button'

const TanStackRouterDevtools = import.meta.env.DEV
  ? lazy(() =>
      import('@tanstack/router-devtools').then((mod) => ({ default: mod.TanStackRouterDevtools }))
    )
  : () => null
import { PawPrint } from 'lucide-react'
import '~/styles.css'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/85 backdrop-blur-xl border-b border-black/5">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight no-underline text-foreground">
          <PawPrint className="size-5 text-orange-500" />
          PawWalks
        </Link>
        <div className="flex items-center gap-6">
          <a href="#services" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline">
            Services
          </a>
          <a href="#about" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline">
            About
          </a>
          <a href="#contact" className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors no-underline">
            Contact
          </a>
          <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
            <a href="#contact">Book a Walk</a>
          </Button>
        </div>
      </nav>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
}
