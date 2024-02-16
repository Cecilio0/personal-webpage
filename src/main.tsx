import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import Projects from "./routes/projects/Projects.tsx";
import Contact from "./routes/contact/Contact.tsx";
import Error from "./routes/error/Error.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
