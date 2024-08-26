import SongsPage from "pages/songs/SongsPage";
import "./App.css";
import Shell from "./layouts/Shell";
import HomePage from "./pages/home.page";
import ResumePage from "./pages/resume/resume.page";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SongPage from "pages/songs/SongPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Shell />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/resume",
          element: <ResumePage />,
        },
        {
          path: "/songs",
          element: <SongsPage />,
        },
        {
          path: "/song/:id",
          element: <SongPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

