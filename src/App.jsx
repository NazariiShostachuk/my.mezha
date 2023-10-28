import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>App</div>,
    },
    {
      path: "/privacy",
      element: <div>Privacy policy</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
