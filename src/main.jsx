import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Menu from './pages/Menu'
import Home from './pages/Home'
import Location from './pages/Location'
import {About} from './pages/About'
import ErrorPage from './ErrorHandler/ErrorPage'
import Category from './pages/Category.jsx'
import Testimonials from './pages/Testimonials.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Order from './orderHandler/Order.jsx'
import CompleteOrder from './orderHandler/CompleteOrder.jsx'
import OrderConfirm from './orderHandler/OrderConfirm.jsx'
import BookTable from './pages/BookTable.jsx'
import ConfirmBooked from './orderHandler/confirmBooked.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/category",
        element: <Category />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/location",
        element: <Location />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/order",
        element: <Order />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/complete",
        element: <CompleteOrder />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/confirm",
        element: <OrderConfirm />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/book",
        element: <BookTable />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/bookingConfirmation",
        element: <ConfirmBooked />,
        errorElement: <ErrorPage />,
      },
      
      
      

      
      // {
      //   path: "/orders",
      //   element: <seeOrders />,
      //   errorElement: <ErrorPage />,
      // },
      // {
      //   path: "/order",
      //   element: <CreateOrder />,
      //   errorElement: <ErrorPage />,
      // },
    ]
  },
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
