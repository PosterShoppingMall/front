import Header from "./component/common/Header.jsx";
import { Reset } from "styled-reset";
import GlobalStyle from "./styles/globalStyle.js";

function App() {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;
