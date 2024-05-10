
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Root/Roots";
import SignIn from "../Authentication/SignIn/SignIn";
import SignUp from "../Authentication/SignUp/SignUp";
import Home from "../Layout/Home/Home";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children: [
        {
          path:"/",
          element:<Home></Home>
        },
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