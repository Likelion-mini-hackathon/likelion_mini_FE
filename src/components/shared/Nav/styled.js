import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0px;
  background-color: ${props =>
    props.visiblity ? 'rgba(0,0,0,0.7)' : 'transparent'};
  backdrop-filter: ${props => props.visiblity && 'blur(30px)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
  z-index: 9999;
  transition: backdrop-filter 0.2s linear 0s, background-color 0.3s linear 0s;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #be123c;
  font-size: 36px;

  /* cursor: pointer; */
`;

export const Title = styled.h2`
  font-family: 'BMHANNApro', sans-serif;

  font-weight: bold;
  padding-left: 18px;
  white-space: nowrap;
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`;

export const SignIn = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 10px 16px;
  white-space: nowrap;

  cursor: pointer;
`;

export const Menu = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #be123c;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
