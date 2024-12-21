import React from 'react'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

import Dashboard from '../pages/Dashboard/Dashboard'
import Products from '../pages/Products/Products'
import ProductDetails from '../pages/Products/ProductDetails'

import CuiHeader from '../components/CuiHeader/CuiHeader'

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className="app-container">
          <CuiHeader />
          <div className="page-container">
            <Outlet />
          </div>
        </div>
      ),
      children: [
        {
          index: true,
          path: 'ReactJS-Store/dashboard',
          element: <Dashboard />,
        },
        {
          path: 'ReactJS-Store/products',
          element: <Products />,
        },
        {
          path: '/productdetails/:productId',
          element: <ProductDetails />,
        },
        {
          path: 'ReactJS-Store',
          element: <Dashboard />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default AppRouter
