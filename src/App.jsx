import Header from "./component/common/Header.jsx";
import { Reset } from "styled-reset";
import styled from "styled-components";

function App() {
  return (
    <div>
      {/* reset css  */}
      <Reset />
      <Header />
    </div>
  );
}

export default App;
