import React from 'react';
// import styled from 'styled-components';
import { AppHeader, Logo, AppFooter } from './components/top_styledComponents';
import logo from './img/finedesigntalk_logo.svg';
import './reset.css';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Posts_001 } from './detail/posts_001';
import Home from './Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader>
          <Link to="/">
            <Logo>
              <img src={logo} alt="D" className="Logo" />
            </Logo>
          </Link>
        </AppHeader>
        <Routes>
          <Route path="/detail/posts_001" element={<Posts_001 />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <AppFooter>&copy; Fine Design Talk</AppFooter>
      </div>
    </BrowserRouter>
  );
};


export default App;
