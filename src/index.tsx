import React from "react";
import ReactDOM from "react-dom/client";
import "../src/css/index.css";

//1-configurando o router
//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import CssBasico from "./routes/CssBasico";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import Display from "./routes/Display";
import Position from "./routes/Position";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/css-basico",
        element: <CssBasico />,
      },
      {
        path: "/display",
        element: <Display />,
      },
      {
        path: "/position",
        element: <Position />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
