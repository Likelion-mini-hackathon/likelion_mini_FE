import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './fonts/fonts.css';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Home from './pages/HomePage';
import Nav from './components/Common/Nav';
import DetailPage from './pages/DetailPage';
import Footer from './components/Common/Footer';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  body {
    background: black;
    color: white;
    font-family: "BMHANNAAir", sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
