import styled from 'styled-components';

const EpisodeDetail = styled.div`
  color: #333;
  text-align: left;
  padding: 0px 20px;
  margin: 0 auto;
  max-width: 700px;
`;

const EpisodeDate = styled.time`
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  text-align: left;
`;

const EpisodeTitle = styled.h1`
  font-size: 24px;
  margin: 6px 0px 0px 0px;
`;

const EpisodeBlock = styled.div`
  margin-top: 40px;
`;

const EpisodePlayer = styled.iframe`
  width: 100%;
  height: 100px;
  border: none;
  overflow: hidden;
  x-scroll: none;
`;

const EpisodeText = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

const EpisodeImageBlock = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const EpisodeImage = styled.img`
  display: inline-block;
`;





export { EpisodeDetail, EpisodeDate, EpisodeTitle, EpisodePlayer, EpisodeText, EpisodeBlock, EpisodeImageBlock, EpisodeImage };