import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import PageNotFound from './pages/PageNotFound.jsx';

const router = createBrowserRouter([
    {
      path: "/", 
      element: <App/>
    }, 
    {
      path:"*", 
      element: <PageNotFound />
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
