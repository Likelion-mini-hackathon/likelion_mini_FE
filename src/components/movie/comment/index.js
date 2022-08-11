import React, { useState } from 'react';
// import axios from 'axios';
// import { useRecoilValue } from 'recoil';
// import { useParams } from 'react-router-dom';
// import { loginState } from '../../../store/atom';

import {
  CommentListWrapper,
  Input,
  InputWrapper,
  RatingWrapper,
  SubBtn,
  Wrapper,
} from './styled';

function Comment({ data }) {
  // const { id } = useParams();
  // const [input, setInput] = useState();
  // const [commentlist, setCommentList] = useState(data.comments);
  // const login = useRecoilValue(loginState);

  // const headers = {
  //   'Content-Type': 'application/json',
  //   Authorization: login.accessToken,
  // };

  // const handleInput = e => {
  //   setInput(e.target.value);
  // };

  // const handleSubmit = e => {
  //   setInputComment({ id: data.id, comment: input });
  // };

  // const handleSubmit = e => {
  //   postComment();
  //   addComment();
  //   console.log(commentlist);
  // };
  // // console.log(token.config.withCredentials);
  // function addComment() {
  //   // if (token.config.withCredentials)
  //   setCommentList(comment => {
  //     const prevComment = [...comment];

  //     const result = [...prevComment, input];
  //     return result;
  //   });
  // }

  // const postComment = () => {
  //   try {
  //     axios.post(
  //       `http://127.0.0.1:8000/movie/comment/`,
  //       {
  //         comment: input,
  //         movies: id,
  //       },
  //       { headers: headers }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Wrapper>
      <RatingWrapper>평점박스</RatingWrapper>
      <CommentListWrapper>북마크순 | 최신순</CommentListWrapper>
      <InputWrapper>
        <Input></Input>
        <SubBtn>확인</SubBtn>
      </InputWrapper>
    </Wrapper>
    // <CommentConDiv>
    //   <CommentBoxDiv>
    //     <CommentInputDiv>
    //       <CommentTitleDiv>한줄평</CommentTitleDiv>
    //       <CommentInput onChange={handleInput}></CommentInput>
    //       <CommentSubBtn onClick={handleSubmit}>확인</CommentSubBtn>
    //     </CommentInputDiv>
    //   </CommentBoxDiv>
    // </CommentConDiv>
  );
}

export default Comment;
