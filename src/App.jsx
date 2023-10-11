import { Reset } from "styled-reset";

import GlobalStyle from "./styles/globalStyle.js";

import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";

import "slick-carousel/slick/slick.css"; //slick 라이브러리
import "slick-carousel/slick/slick-theme.css"; //slick 라이브러리

import { Provider } from 'react-redux'; 
import store from './store';

function App() {
  return (
    //store 컴포넌트 묶음
    <Provider store={store}> 
    <>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
    </Provider>
  );
}

export default App;
