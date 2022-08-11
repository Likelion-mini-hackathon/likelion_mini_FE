import styled from 'styled-components';
import COLOR from '../../../constants/color';

const handleColor = genre => {
  switch (genre) {
    case '액션':
      return `color: ${COLOR.WHITE}; background: ${COLOR.RED}`;
    case '모험':
      return `color: ${COLOR.WHITE}; background: ${COLOR.RED}`;
    case '멜로/로맨스':
      return `color: ${COLOR.WHITE}; background: ${COLOR.RED}`;
    case '드라마':
      return `color: ${COLOR.BLACK}; background: ${COLOR.MINT}`;
    case '다큐멘터리':
      return `color: ${COLOR.BLACK}; background: ${COLOR.MINT}`;
    case '미스터리':
      return `color: ${COLOR.BLACK}; background: ${COLOR['GRAY-300']}`;
    case '범죄':
      return `color: ${COLOR.BLACK}; background: ${COLOR['GRAY-300']}`;
    case '공포':
      return `color: ${COLOR.BLACK}; background: ${COLOR['GRAY-300']}`;
    case '스릴러':
      return `color: ${COLOR.BLACK}; background: ${COLOR['GRAY-300']}`;
    case '서스펜스':
      return `color: ${COLOR.BLACK}; background: ${COLOR['GRAY-300']}`;
    case 'SF':
      return `color: ${COLOR.BLACK}; background: ${COLOR.BLUE}`;
    case '판타지':
      return `color: ${COLOR.BLACK}; background: ${COLOR.BLUE}`;
    case '애니메이션':
      return `color: ${COLOR.BLACK}; background: ${COLOR.YELLOW}`;
    case '코미디':
      return `color: ${COLOR.BLACK}; background: ${COLOR.YELLOW}`;
    case '뮤지컬':
      return `color: ${COLOR.BLACK}; background: ${COLOR.YELLOW}`;
    case '공연실황':
      return `color: ${COLOR.BLACK}; background: ${COLOR.YELLOW}`;
  }
};

export const GenreWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

export const GenreItem = styled.div`
  width: 100px;
  height: 30px;
  padding: 10px 15px;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  ${props => props.el && handleColor(props.el)};
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
