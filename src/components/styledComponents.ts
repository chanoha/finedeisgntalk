import styled from 'styled-components';

const BlueButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

const AppHeader = styled.header`
  background-color: #fff;
  border-top: #daff00 10px solid;
`;

const Logo = styled.div`
  margin-top: 46px;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0px 0px 0px;
  font-family: 'Noto Sans JP', sans-serif;
  color: #333;
`;

const PageDescription = styled.p`
  font-size: 14px;
  margin: 10px 0px 0px 0px;
  font-family: 'Noto Sans JP', sans-serif;
  color: #333;
`;

const LinkBlock = styled.ul`
  padding: 20px;
`;

const LinkList = styled.li`
  background-color: #daff00;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 12px;
  display: inline-block;
  height: 30px;
  border-radius: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

const Link = styled.a<{ service?: string }>`
  text-decoration: none;
  color: #333;
  display: inline-block;
  padding: 0px 14px 0px 10px;
  &::before {
    content: "";
    vertical-align: middle;
    width: 26px;
    height: 30px;
    display: inline-block;
    background: url(${props => {
      switch (props.service) {
        case 'spotify':
          return './img/Spotify_Icon_RGB_Black.png';
        case 'google':
          return '';
        default:
          return '';
      }
    }}) no-repeat;
    background-size: 18px 18px;
    background-position: 50%;
  }
`;

const Episode = styled.ol`
  padding: 0px;
  margin: 0px 20px;
  color: #333;
`;

const EpisodeList = styled.li`
  &:last-child {
    margin-bottom: 0px;
  }
`;

const EpisodeLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #333;
  padding: 0px 13vw;
  width: 100%;
  height: 33vw;
  background: url(./img/fukidashi.svg) no-repeat center;
  position: relative;
  margin: 0px auto 2vw auto;
  font-family: 'Noto Sans JP', sans-serif;
  @media (min-width: 620px) {
    width: 490px;
    height: 220px;
    padding: 0px 26px;
  }
`;

const EpisodeNumber = styled.p`
  width: 23vw;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  @media (min-width: 620px) {
    width: 140px!important;
  }
`;

const EpisodeDetail = styled.div`
  margin-left: 25vw;
  text-align: left;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  @media (min-width: 600px) {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    width: 260px;
  }
  @media (min-width: 620px) {
    margin-left: 154px!important;
  }
`;

const EpisodeTitle = styled.h2`
  font-size: 20px;
`;

const EpisodeDescription = styled.p`
  display: none;
  font-size: 16px;
  line-height: 22px;
  margin-top: 4px;
  @media (min-width: 600px) {
    display: block;
  }
`;

const EpisodeDateTime = styled.div`
  display: block;
`;

const EpisodeDate = styled.time`
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
`;

const EpisodeTime = styled.p`
  display: inline-block;
  margin-left: 10px;
  font-size: 12px;
  font-weight: bold;
  &::before {
    content: "";
    vertical-align: middle;
    width: 14px;
    height: 17px;
    margin-right: 2px;
    display: inline-block;
    background: url(./img/playTime.svg) no-repeat;
    background-size: 14px 14px;
  }
`;

export { BlueButton, AppHeader, Logo, PageTitle, PageDescription, LinkBlock, LinkList, Link, Episode, EpisodeList, EpisodeLink, EpisodeNumber, EpisodeDetail, EpisodeTitle, EpisodeDescription, EpisodeDateTime, EpisodeDate, EpisodeTime };