import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import Wishlist from '../Pages/Wishlist'
import Cart from '../Pages/Cart'
import NotFound from '../Pages/NotFound'
import Header from '../Pages/Header'


const Route = () => {
    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <div><Header/><Homepage/></div>,
            },
            {
                path: '/wishlist',
                element: <div>
                    <Header/>
                    <Wishlist/>
                </div>
            },
            {
                path: '/cart',
                element: <div>
                    <Header/>
                    <Cart/>
                </div>
            },
            {
                path: '*',
                element: <div>
                    <Header/>
                    <NotFound/>
                </div>
            }
        ]
    )
  return (
    <>
        <RouterProvider router={router}>
        <Header/>

        </RouterProvider>
    </>
  )
}

export default Route