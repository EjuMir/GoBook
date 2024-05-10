
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Root/Roots";
import SignIn from "../Authentication/SignIn/SignIn";
import SignUp from "../Authentication/SignUp/SignUp";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children: [
        {
          path:"/signIn",
          element:<SignIn></SignIn>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;