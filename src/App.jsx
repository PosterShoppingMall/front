import Header from "./component/common/Header.jsx";
import { Reset } from "styled-reset";
import GlobalStyle from "./styles/globalStyle.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <></>,
      children: [
        {
          // home
          path: "/",
          element: <></>,
        },
        {
          path: "/login",
          element: <></>,
        },
        {
          path: "/register",
          element: <></>,
        },
        {
          path: "/user",
          element: <></>,
        },
        {
          path: "/best",
          element: <></>,
        },
        {
          path: "/all",
          element: <></>,
        },
        {
          path: "/illustrator",
          element: <></>,
        },
        {
          path: "/illustrator",
          element: <></>,
        },
        {
          path: "/illustrator",
          element: <></>,
        },
      ],
    },
  ]);
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;
