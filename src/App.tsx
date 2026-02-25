import { ThemeToggle } from './ThemeToggle'

export function App() {
  return (
    <div className="min-h-screen w-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <ThemeToggle />
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-light">mortware</h1>
      </div>
    </div>
  )
}
