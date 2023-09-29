import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import BMHANNAAir from "../assets/fonts/BMHANNAAir.woff2";
import BMHANNAPro from "../assets/fonts/BMHANNAPro.woff2";
import NanumSquareR from "../assets/fonts/NanumSquareR.woff2";
import NanumSquareB from "../assets/fonts/NanumSquareB.woff2";
import NanumSquareEB from "../assets/fonts/NanumSquareEB.woff2";
import NanumSquareL from "../assets/fonts/NanumSquareL.woff2";
import NanumSquareAcR from "../assets/fonts/NanumSquareAcR.woff2";
import NanumSquareAcB from "../assets/fonts/NanumSquareAcB.woff2";
import NanumSquareAcEB from "../assets/fonts/NanumSquareAcEB.woff2";
import NanumSquareAcL from "../assets/fonts/NanumSquareAcL.woff2";

const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
            font-family: 'BMHANNAAir';
            font-weight: normal;
            src: url('${BMHANNAAir}') format('woff2');
            }

            @font-face {
            font-family: 'BMHANNAPro';
            font-weight: normal;
            src: url('${BMHANNAPro}') format('woff2');
            }

            @font-face {
            font-family: 'NanumSquare';
            font-weight: 400;
            src: url('${NanumSquareR}') format('woff2');
            }

            @font-face {
            font-family: 'NanumSquare';
            font-weight: 700;
            src: url('${NanumSquareB}') format('woff2');  
            }

            @font-face {
            font-family: 'NanumSquare';
            font-weight: 800;
            src: url('${NanumSquareEB}') format('woff2');
            }

            @font-face {
            font-family: 'NanumSquare';
            font-weight: 300;
            src: url('${NanumSquareL}') format('woff2');
            
            }
            /* AC */
            @font-face {
            font-family: 'NanumSquareAc';
            font-weight: 400;
            src: url('${NanumSquareAcR}') format('woff2');
            }

            @font-face {
            font-family: 'NanumSquareAc';
            font-weight: 700;
            src: url('${NanumSquareAcB}') format('woff2');
            
            }

            @font-face {
            font-family: 'NanumSquareAc';
            font-weight: 800;
            src: url('${NanumSquareAcEB}') format('woff2');
            }
            
            @font-face {
            font-family: 'NanumSquareAc';
            font-weight: 300;
            src: url('${NanumSquareAcL}') format('woff2');
            }

`;

export default GlobalStyle;
