import React from 'react';
// import styled from 'styled-components';
import { AppHeader, Logo, PageTitle, PageDescription,LinkBlock, LinkList, Link, Episode, EpisodeList, EpisodeLink, EpisodeNumber, EpisodeDetail, EpisodeTitle, EpisodeDescription, EpisodeDateTime, EpisodeDate, EpisodeTime, AppFooter } from './components/styledComponents';
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
      <Episode>
        <EpisodeList>
          <EpisodeLink href="#">
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
        <EpisodeLink href="#">
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
