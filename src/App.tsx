import React from 'react';
import styled from 'styled-components';
import { BlueButton, AppHeader, Logo, PageTitle, PageDescription,LinkBlock, LinkList, Link } from './components/styledComponents';
import logo from './img/finedesigntalk_logo.svg';
import './reset.css'
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
      <ol className="Episode">
        <li className="EpisodeList">
          <a className="EpisodeLink" href="#">
            <p className="EpisodeNumber">#1</p>
            <div className="EpisodeDetail">
              <h2 className="EpisodeTitle">自己紹介</h2>
              <p className="EpisodeDescription">最初の回ということで、自己紹介をしました。改行するとこんな感じ</p>
              <div className="EpisodeDateTime">
                <time className="EpisodeDate">2023.08.01</time>
                <p className="EpisodeTime">12分</p>
              </div>
            </div>
          </a>
        </li>
        <li className="EpisodeList">
          <a className="EpisodeLink" href="#">
            <p className="EpisodeNumber">#999</p>
            <div className="EpisodeDetail">
              <h2 className="EpisodeTitle">自己紹介</h2>
              <p className="EpisodeDescription">最初の回ということで、自己紹介をしました。改行するとこんな感じ</p>
              <div className="EpisodeDateTime">
                <time className="EpisodeDate">2023.08.01</time>
                <p className="EpisodeTime">12分</p>
              </div>
            </div>
          </a>
        </li>
      </ol>
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
