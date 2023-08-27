import React from 'react';
import { FC } from "react";
import '../reset.css';
import { EpisodeDetail, EpisodeDate, EpisodeTitle, EpisodePlayer, EpisodeText, EpisodeBlock, EpisodeImageBlock, EpisodeImage } from '../components/detail_styledComponents';

export const Posts_001: FC = () => {
  return (
    <EpisodeDetail>
      <EpisodeDate>2023.08.01</EpisodeDate>
      <EpisodePlayer src="https://podcasters.spotify.com/pod/show/finedesigntalk/embed/episodes/ep-e25rddt" scrolling="no"></EpisodePlayer>
      <EpisodeBlock>
        <EpisodeText>
          第一回目ということで自己紹介をしました。
        </EpisodeText>
        <EpisodeText>
          お互いの簡単な経歴や今やっていることと、これからの配信内容についても少し話しました。
        </EpisodeText>
        {/* <EpisodeImageBlock>
          <EpisodeImage src="../../img/Popeye.jpeg"></EpisodeImage>
        </EpisodeImageBlock> */}
      </EpisodeBlock>
    </EpisodeDetail>
  );
};