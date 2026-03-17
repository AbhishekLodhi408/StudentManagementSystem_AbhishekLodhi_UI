import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./Components/Login";
import Students from "./Components/Students";
import Classes from "./Components/Classes";
import Master from "./Components/Master";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/master",
      element: <Master />,
    },
    {
      path: "/students",
      element: <Students />,
    },
    {
      path: "/classes",
      element: <Classes />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
