import React from 'react';
// import styled from 'styled-components';
import { AppHeader, Logo, PageTitle, PageDescription,LinkBlock, LinkList, Links, Episode, EpisodeList, EpisodeLink, EpisodeNumber, EpisodeDetail, EpisodeTitle, EpisodeDescription, EpisodeDateTime, EpisodeDate, EpisodeTime, AppFooter } from './components/top_styledComponents';
import logo from './img/finedesigntalk_logo.svg';
import './reset.css'
import './App.css';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import { Posts_001 } from './detail/posts_001';

// function App() {
const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <nav>
          <Link to="/detail">Detail</Link>
        </nav>
        <Routes>
          <Route path="/detail" element={<Posts_001 />} /> 
        </Routes>
      </div>
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
          <Links service="spotify" href="#">Spotify</Links>
        </LinkList>
      </LinkBlock>
        <Episode>
          <EpisodeList>
            <EpisodeLink>
                <EpisodeNumber>#1</EpisodeNumber>
                <EpisodeDetail>
                  <EpisodeTitle>自己紹介</EpisodeTitle>
                  <EpisodeDescription>最初の回ということで、自己紹介をしました。改行するとこんな感じ</EpisodeDescription>
                  <EpisodeDateTime>
                    <EpisodeDate>2023.08.01</EpisodeDate>
                    <EpisodeTime>12分</EpisodeTime>
                  </EpisodeDateTime>
                </EpisodeDetail>
            </EpisodeLink>
          </EpisodeList>
          <EpisodeList>
          <EpisodeLink>
            <EpisodeNumber>#999</EpisodeNumber>
              <EpisodeDetail>
                <EpisodeTitle>自己紹介</EpisodeTitle>
                <EpisodeDescription>最初の回ということで、自己紹介をしました。改行するとこんな感じ</EpisodeDescription>
                <EpisodeDateTime>
                  <EpisodeDate>2023.08.01</EpisodeDate>
                  <EpisodeTime>12分</EpisodeTime>
                </EpisodeDateTime>
              </EpisodeDetail>
            </EpisodeLink>
          </EpisodeList>
        </Episode>
      <AppFooter>&copy; Fine Design Talk</AppFooter>
    </div>
  );
}

export default App;
