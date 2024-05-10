import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Firebase from './Firebase/Firebase.jsx'
import router from './Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Firebase>
        <RouterProvider router={router}/>
    </Firebase>
  </React.StrictMode>,
)
