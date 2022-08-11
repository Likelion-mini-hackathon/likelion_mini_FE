import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfStroke,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  DetailWrapper,
  ArrowBtn,
  Header,
  HeaderKor,
  HeaderEng,
  Wrapper,
  ContentWrapper,
  Poster,
  ContentItem,
  ContentTitle,
  Content,
  Summary,
  Staff,
  StaffItem,
  StaffImg,
  StaffContent,
} from './styled';
import Comment from '../comment';
import GenreBox from '../../shared/Genre';
import NotFoundPage from './../../shared/404/index';

const ContentDiv = ({ title, content }) => {
  return (
    <ContentItem>
      <ContentTitle>{title}</ContentTitle>
      <Content>{content}</Content>
    </ContentItem>
  );
};

const Detail = ({ data }) => {
  const [direction, setDirection] = useState(true);
  const detailRef = useRef(null);

  const onClickArrow = () => {
    const targetHeight = detailRef.current.clientHeight;

    direction
      ? window.scrollTo({ top: targetHeight, behavior: 'smooth' })
      : window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onScroll = () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      setDirection(false);
    } else if (window.scrollY < window.innerHeight * 0.5) {
      setDirection(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return data ? (
    <Container>
      <DetailWrapper ref={detailRef}>
        <Header>
          <HeaderKor>{data.title_kor}</HeaderKor>
          <HeaderEng>{data.title_eng}</HeaderEng>
        </Header>
        <Wrapper>
          <Poster src={data.poster_url} />
          <ContentWrapper>
            <GenreBox genre={data.split_genre} />
            <ContentDiv title={'상영시간'} content={data.showtimes} />
            <ContentDiv title={'상영등급'} content={data.rate} />
            <ContentDiv title={'개봉일'} content={data.release_date} />
            <ContentItem>
              <ContentTitle>줄거리</ContentTitle>
              <Summary>{data.summary}</Summary>
            </ContentItem>
            <ContentItem>
              <ContentTitle>인물정보</ContentTitle>
              <Staff>
                {data.staff &&
                  data.staff.map((el, index) => (
                    <StaffItem key={index}>
                      <StaffImg src={el.image_url}>
                        <StaffContent>
                          {el.role}
                          <br />-<br />
                          {el.name}
                        </StaffContent>
                      </StaffImg>
                    </StaffItem>
                  ))}
              </Staff>
            </ContentItem>
          </ContentWrapper>
        </Wrapper>
      </DetailWrapper>
      <Comment />
      <ArrowBtn onClick={onClickArrow}>
        {direction ? (
          <FontAwesomeIcon icon={faAngleDown} />
        ) : (
          <FontAwesomeIcon icon={faAngleUp} />
        )}
      </ArrowBtn>
    </Container>
  ) : (
    <NotFoundPage />
  );
};

export default Detail;
