import MainLayout from "./component/common/MainLayout.jsx";

import { Reset } from "styled-reset";

import GlobalStyle from "./styles/globalStyle.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/home/Home.jsx";
import Login from "./page/login/Login.jsx";
import Register from "./page/register/Register.jsx";
import User from "./page/userPage/User.jsx";
import BestItem from "./page/BestItem.jsx";
import IllustratorItem from "./page/IllustratorItem.jsx";
import AllItem from "./page/AllItem.jsx";
import PhotoItem from "./page/PhotographyItem.jsx";
import TypographyItem from "./page/TypographyItem.jsx";
import FamousPainting from "./page/FamousPainting.jsx";
import Cart from "./page/cart/Cart.jsx";
import ListDeatilPage from "./page/detail/ListDeatilPage.jsx";

import "slick-carousel/slick/slick.css"; //slick 라이브러리
import "slick-carousel/slick/slick-theme.css"; //slick 라이브러리

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          // home
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/best",
          element: <BestItem />,
        },
        {
          path: "/all",
          element: <AllItem />,
        },
        {
          path: "/illustrator",
          element: <IllustratorItem />,
        },
        {
          path: "/famous-painting",
          element: <FamousPainting />,
        },
        {
          path: "/photography",
          element: <PhotoItem />,
        },
        {
          path: "/typography",
          element: <TypographyItem />,
        },
        {
          path: "/product/:product_id",
          element: <ListDeatilPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
