import "./App.css";
import Shell from "./layouts/Shell";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/resume/ResumePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TrackPage from "pages/tracks/TrackPage";
import TracksPage from "pages/tracks/TracksPage";

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
          path: "/tracks",
          element: <TracksPage />,
        },
        {
          path: "/track/:id",
          element: <TrackPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

