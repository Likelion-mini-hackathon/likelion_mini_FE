import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/fonts/fonts.css';

import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import HomePage from './components/main';
import SearchPage from './components/search';
import Nav from './components/common/nav';
import DetailPage from './components/movie';
import Login from './components/auth/login';
import RegisterPage from './components/auth/register';
import { useRecoilValue } from 'recoil';
import { tokenState } from './atom';
import AllMoviePage from './components/allmovie';
import AuthPage from './components/auth';

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
    font-size: 1.2rem;
  }
`;

const RouterWrapper = styled.div``;

function App() {
  const token = useRecoilValue(tokenState);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storage = window.localStorage.getItem('loginId');
    console.log(storage);

    setLoggedIn(storage ? true : false);
  }, [token]);

  // useEffect(() => {}, [login]);

  // window.sessionStorage.clear();

  return (
    <>
      <GlobalStyle />
      <Nav />
      <RouterWrapper>
        <Routes>
          {loggedIn ? (
            <>
              <Route exact path="/search" element={<SearchPage />} />
              <Route path="/movie/:id" element={<DetailPage />} />
              <Route path="/allMovies" element={<AllMoviePage />} />
              <Route path="/" element={<HomePage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<AuthPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}
        </Routes>
      </RouterWrapper>
    </>
  );
}

export default App;
