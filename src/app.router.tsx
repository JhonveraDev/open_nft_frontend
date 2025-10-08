import { createBrowserRouter } from "react-router";
import { Navigate } from "react-router-dom";

import { NftLayouts } from "./features/marketplace/layouts/NftLayouts";
import { HomePage } from "./features/marketplace/pages/home/HomePage";
import { ProductPage } from "./features/marketplace/pages/product/ProductPage";
import { AboutPage } from "./features/marketplace/pages/about/AboutPage";
import { ContactPage } from "./features/marketplace/pages/contact/ContactPage";

//Sistema de Rutas principal
export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <NftLayouts />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'product',
        element: <ProductPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ]
  }
])
