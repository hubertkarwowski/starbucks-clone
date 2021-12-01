import Header from "./components/Header/Header";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";

import font from "./fonts/SoDoSans.ttf";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Extras from "./components/Extras/Extras";
import Stars from "./components/Stars/Stars";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "SoDoSans";
    text-decoration: none;
  }
    @font-face {
        font-family: 'SoDoSans';
        src: url(${font}) format("woff2")

    }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Steps />
      <Extras />
      <Stars />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
