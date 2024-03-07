import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import Projects from "./routes/projects/Projects.tsx";
import Error from "./routes/error/Error.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Error />,
    errorElement: <Error />,
  },
  {
    path: "/personal-webpage",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/personal-webpage/projects",
    element: <Projects />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
