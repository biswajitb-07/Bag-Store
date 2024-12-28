import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Product } from "./pages/Product.jsx";
import { Cart } from "./pages/Cart.jsx";
import { PlaceOrder } from "./pages/PlaceOrder.jsx";
import { Orders } from "./pages/Orders.jsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './component/Layout/AppLayout.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { Collection } from './pages/Collection.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Collection />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/product/:productId",
        element: <Product />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/place-order",
        element: <PlaceOrder />
      },
      {
        path: "/orders",
        element: <Orders />
      },
    ]
  }
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
