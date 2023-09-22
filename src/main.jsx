import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';  
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/jobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home> ,
      },
      {
        path:'/AppliedJobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/Blog',
        element:<Blog></Blog>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader : ()=> fetch('../jobs.json')
      }
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
