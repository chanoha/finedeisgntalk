import React from 'react';
import styled from 'styled-components';
import { BlueButton, AppHeader, Logo, PageTitle, PageDescription,LinkBlock, LinkList, Link } from './components/styledComponents';
import logo from './img/finedesigntalk_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader>
        <Logo>
          <img src={logo} alt="D" className="Logo" />
        </Logo>
      </AppHeader>
      <PageTitle>Fine Design Talk</PageTitle>
      <PageDescription>
        デザイナーの山田と藤本が<br />
        最近興味のあるデザインについて、<br />
        ゆるく深ぼるPodCast。毎週金曜日に配信します。
      </PageDescription>
      <LinkBlock>
        <LinkList>
          <Link service="spotify" href="#">Spotify</Link>
        </LinkList>
      </LinkBlock>

      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BlueButton>Learn React + typescript</BlueButton>
        </a>
      </div>
    </div>
  );
}

export default App;
