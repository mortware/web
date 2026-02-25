import { Link, Route, Routes } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import ResumePage from './resume/ResumePage'

export function App() {
  return (
    <div className="app-shell">
      <div className="print:hidden">
        <ThemeToggle />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <main className="flex min-h-screen items-center justify-center">
              <div className="flex flex-col items-center gap-6">
                <h1 className="text-4xl font-light tracking-wide">mortware</h1>
              </div>
            </main>
          }
        />
        <Route
          path="/resume"
          element={
            <main className="mx-auto max-w-6xl px-4 pb-20 pt-16 lg:px-10">
              <ResumePage />
            </main>
          }
        />
      </Routes>
    </div>
  )
}
