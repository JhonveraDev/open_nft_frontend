import { createBrowserRouter } from "react-router";
import { Navigate } from "react-router-dom";

import { NftLayouts } from "./nft/layouts/NftLayouts";
import { HomePage } from "./nft/pages/home/HomePage";
import { ProductPage } from "./nft/pages/product/ProductPage";
import { AboutPage } from "./nft/pages/about/AboutPage";
import { ContactPage } from "./nft/pages/contact/ContactPage";

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
