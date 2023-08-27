import React from 'react';
import styled from 'styled-components';
import { AppHeader, Logo, PageTitle, PageDescription,LinkBlock, LinkList, Links, Episode, EpisodeList, EpisodeLink, EpisodeNumber, EpisodeDetail, EpisodeTitle, EpisodeDescription, EpisodeDateTime, EpisodeDate, EpisodeTime, AppFooter, LinksNone } from './components/top_styledComponents';
import logo from './img/finedesigntalk_logo.svg';
import './reset.css'
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Posts_001 } from './detail/posts_001';

const Home: React.FC = () => {
  return (
    <div>
    <PageTitle>Fine Design Talk</PageTitle>
    <PageDescription>
      デザイナーの山田と藤本が<br />
      最近興味のあるデザインについて、<br />
      ゆるく深ぼるPodCast。毎週金曜日に配信します。
    </PageDescription>
    <LinkBlock>
      <LinkList>
        <Links service="spotify" href="https://podcasters.spotify.com/pod/show/finedesigntalk/episodes/ep-e25rddt">Spotify</Links>
      </LinkList>
      {/* <LinkList>
        <LinksNone href="https://podcasters.spotify.com/pod/show/finedesigntalk/episodes/ep-e25rddt">Google Podcasts</LinksNone>
      </LinkList> */}
    </LinkBlock>
      <Episode>
        <EpisodeList>
          <Link to="/detail/posts_001">
            <EpisodeLink>
                <EpisodeNumber>#1</EpisodeNumber>
                <EpisodeDetail>
                  <EpisodeTitle>自己紹介</EpisodeTitle>
                  <EpisodeDescription>最初の回ということで、自己紹介をしました。</EpisodeDescription>
                  <EpisodeDateTime>
                    <EpisodeDate>2023.08.25</EpisodeDate>
                    <EpisodeTime>15分</EpisodeTime>
                  </EpisodeDateTime>
                </EpisodeDetail>
            </EpisodeLink>
          </Link>
        </EpisodeList>
      </Episode>
    </div>
  );
};


export default Home;
