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
  margin: 46px auto 0px auto;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0px 0px 0px;
  font-family: 'Noto Sans JP', sans-serif;
`;

const PageDescription = styled.p`
  font-size: 14px;
  margin: 10px 0px 0px 0px;
  font-family: 'Noto Sans JP', sans-serif;
`;

const LinkBlock = styled.ul`
  padding: 0px;
`;

const LinkList = styled.li`
  background-color: #daff00;
  font-family: 'Noto Sans JP', sans-serif;
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

export { BlueButton, AppHeader, Logo, PageTitle, PageDescription, LinkBlock, LinkList, Link };