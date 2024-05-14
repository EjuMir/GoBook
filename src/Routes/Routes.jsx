
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
import Category from "../Layout/Home/Category";
import Details from "../Layout/Details/Details";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdatePage from "../Layout/UpdatePage/UpdatePage";
import BestSelling from "../Layout/Home/BestSelling";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
          loader:()=>fetch('http://localhost:5000/allBooks')
        },
        {
          path:"/addBooks",
          element:<PrivateRoute><AddBooks></AddBooks></PrivateRoute> 
        },
        {
          path:"/borrowedBooks",
          element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
        },
        {
          path:"/allBooks/:id",
          element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/allBooks/${params.id}`)
        },
        {
          path:'/',
          element:<Category></Category>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>,
          loader : ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
          path:'/updatePage/:id',
          element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
          loader : ({params})=>fetch(`http://localhost:5000/updatePage/${params.id}`)
        },
        {
          path:'/',
          element: <BestSelling></BestSelling>,
        }
      ]
    },
  ]);

export default router;