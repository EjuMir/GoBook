
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Root/Roots";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>
    },
  ]);

export default router;