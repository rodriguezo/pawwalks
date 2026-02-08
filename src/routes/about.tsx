import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>Built with React and TanStack Router.</p>
    </div>
  )
}
