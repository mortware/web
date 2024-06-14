import './App.css'
import Shell from './layouts/Shell';
import HomePage from './pages/home.page';
import ResumePage from './pages/resume/resume.page';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <Shell />,
    children: [{
      path: "/",
      element: <HomePage />
    },
    {
      path: "/resume",
      element: <ResumePage />
    }
    ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App
