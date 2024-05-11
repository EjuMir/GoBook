
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Root/Roots";
import SignIn from "../Authentication/SignIn/SignIn";
import SignUp from "../Authentication/SignUp/SignUp";
import Home from "../Layout/Home/Home";
import AllBooks from "../Layout/AllBooks/AllBooks";
import AddBooks from "../Layout/AddBooks/AddBooks";
import BorrowedBooks from "../Layout/BorrowedBooks/BorrowedBooks";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children: [
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/signIn",
          element:<SignIn></SignIn>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"/allBooks",
          element:<AllBooks></AllBooks>,
          loader:()=>fetch('http://localhost:5000/allBooks')
        },
        {
          path:"/addBooks",
          element:<AddBooks></AddBooks>
        },
        {
          path:"/borrowedBooks",
          element:<BorrowedBooks></BorrowedBooks>
        },
        {
          path:"/allBooks/:id",
          element:<AllBooks></AllBooks>,
          loader:({params})=>fetch(`http://localhost:5000/allBooks/${params.id}`)
        }
      ]
    },
  ]);

export default router;