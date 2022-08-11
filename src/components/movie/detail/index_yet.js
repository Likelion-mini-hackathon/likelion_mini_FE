import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfStroke,
  faAngleDown,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

import {
  Wrapper,
  ConDiv,
  ImgDiv,
  LeftDiv,
  MainConDiv,
  MainDiv,
  Poster,
  RightDiv,
  SpeBoxDiv,
  SpeConDiv,
  SpeContDiv,
  SpeSumDiv,
  SpeTitleDiv,
  TitleConDiv,
  TitleEngDiv,
  TitleKorDiv,
  StaffConDiv,
  Star,
  RatBoxDiv,
  RatInboxDiv,
  StaffItemDiv,
  StaffItemImg,
  StaffItemName,
  ArrowBtn,
  CommentWrapper,
} from './styled';
import Comment from '../comment';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../../store/atom';
import { useNavigate, useParams } from 'react-router-dom';
import detailAPI from '../../../apis/detailAPI';

function Detail() {
  const login = useRecoilValue(loginState);
  const [direction, setDirection] = useState(true);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const detailRef = useRef(null);
  const { id } = useParams();

  /* 소연
import { loginState } from '../../../store/atom';
import { useNavigate, useParams } from 'react-router-dom';
import detailAPI from './../../../apis/detailAPI';

function Detail() {
  // const rating_sum =
  //   parseFloat(data.rating_aud) +
  //   parseFloat(data.rating_cri) +
  //   parseFloat(data.rating_net);
  const [data, setData] = useState(null);
  const login = useRecoilValue(loginState);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function getDetail() {
      try {
        const data = await detailAPI.getDetail(params.id);
        setData(data);
        console.log(data);
      } catch (error) {
        throw Error('getDetail 실패');
      }
    }
    getDetail();
  }, []);
*/
  const [data, setData] = useState(null);
  // const login = useRecoilValue(loginState);
  // const navigate = useNavigate();
  // const params = useParams();

  useEffect(() => {
    async function getDetail() {
      try {
        const data = await detailAPI.getDetail(id);
        setData(data);
        setRating(
          parseFloat(data.rating_aud) +
            parseFloat(data.rating_cri) +
            parseFloat(data.rating_net)
        );

        console.log(data);
      } catch (error) {
        throw Error('getDetail 실패');
      }
    }
    getDetail();
  }, []);

  function toLogin() {
    alert('로그인 후 이용해주세요');
    navigate('/login');
  }

  function handleLoggedIn() {
    login.isLogin ? console.log('login') : toLogin();
  }

  const onClickArrow = () => {
    const targetHeight = detailRef.current.clientHeight;

    direction
      ? window.scrollTo({ top: targetHeight, behavior: 'smooth' })
      : window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onScroll = () => {
    // console.log(window.scrollY);

    if (window.scrollY > window.innerHeight * 0.5) {
      setDirection(false);
    } else if (window.scrollY < window.innerHeight * 0.5) {
      setDirection(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return (
    <>
      {login.isLogin ? (
        data && (
          <Wrapper>
            <ConDiv ref={detailRef}>
              <MainDiv>
                <MainConDiv>
                  <LeftDiv>
                    <TitleConDiv>
                      <TitleKorDiv>{data.title_kor}</TitleKorDiv>
                      <TitleEngDiv>{data.title_eng}</TitleEngDiv>
                    </TitleConDiv>
                    <SpeBoxDiv>
                      <SpeConDiv>
                        <SpeTitleDiv>장르</SpeTitleDiv>
                        <SpeContDiv>{data.genre}</SpeContDiv>
                      </SpeConDiv>
                      <SpeConDiv>
                        <SpeTitleDiv>상영시간</SpeTitleDiv>
                        <SpeContDiv>{data.showtimes}</SpeContDiv>
                      </SpeConDiv>
                      <SpeConDiv>
                        <SpeTitleDiv>개봉일</SpeTitleDiv>
                        <SpeContDiv>{data.release_date}</SpeContDiv>
                      </SpeConDiv>
                    </SpeBoxDiv>
                    <SpeBoxDiv></SpeBoxDiv>
                    <RatBoxDiv>
                      <RatInboxDiv>
                        <SpeConDiv>
                          <SpeTitleDiv>관람객 평점</SpeTitleDiv>
                          <SpeContDiv>{data.rating_aud}</SpeContDiv>
                        </SpeConDiv>
                        <SpeConDiv>
                          <SpeTitleDiv>평론가 평점</SpeTitleDiv>
                          <SpeContDiv>{data.rating_cri}</SpeContDiv>
                        </SpeConDiv>
                        <SpeConDiv>
                          <SpeTitleDiv>네티즌 평점</SpeTitleDiv>
                          <SpeContDiv>{data.rating_net}</SpeContDiv>
                        </SpeConDiv>
                      </RatInboxDiv>
                      <RatInboxDiv>
                        <SpeConDiv>
                          <SpeTitleDiv>총 평점</SpeTitleDiv>
                          <SpeContDiv>
                            {rating > 0 && (
                              <Star>
                                {[
                                  ...Array(
                                    Math.trunc(Math.round(rating / 3) / 1.5)
                                  ),
                                ].map((_, index) => (
                                  <FontAwesomeIcon key={index} icon={faStar} />
                                ))}
                                {Math.trunc(Math.round(rating / 3) % 2) ? (
                                  <FontAwesomeIcon icon={faStarHalfStroke} />
                                ) : null}
                              </Star>
                            )}
                          </SpeContDiv>
                        </SpeConDiv>
                      </RatInboxDiv>
                    </RatBoxDiv>
                    <SpeBoxDiv>
                      <SpeConDiv>
                        <SpeTitleDiv>줄거리</SpeTitleDiv>
                        <SpeSumDiv>{data.summary}</SpeSumDiv>
                      </SpeConDiv>
                    </SpeBoxDiv>
                  </LeftDiv>
                  <RightDiv>
                    <ImgDiv>
                      <Poster src={data.poster_url} />
                    </ImgDiv>
                    <StaffConDiv>
                      {data.staffs &&
                        data.staffs.slice(0, 3).map((el, index) => (
                          <StaffItemDiv key={index}>
                            <StaffItemImg url={el.image_url} />
                            <StaffItemName>
                              {el.name} - {el.role}
                            </StaffItemName>
                          </StaffItemDiv>
                        ))}
                    </StaffConDiv>
                  </RightDiv>
                </MainConDiv>
              </MainDiv>
            </ConDiv>
            <CommentWrapper>
              <Comment data={data} />
            </CommentWrapper>
            <ArrowBtn onClick={onClickArrow}>
              {direction ? (
                <FontAwesomeIcon icon={faAngleDown} />
              ) : (
                <FontAwesomeIcon icon={faAngleUp} />
              )}
            </ArrowBtn>
          </Wrapper>
        )
      ) : (
        <div
          onClick={handleLoggedIn}
          style={{ position: 'fixed', top: '500px', left: '500px' }}
        >
          로그인?
        </div>
      )}
    </>
  );
}

export default Detail;
