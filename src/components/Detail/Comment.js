import React, { useState } from 'react';
import { commentState } from '../../atom';
import { useRecoilState } from 'recoil';
import {
  CommentBoxDiv,
  CommentConDiv,
  CommentInput,
  CommentInputDiv,
  CommentSubBtn,
  CommentTitleDiv,
} from './styledComponents';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Comment({ data }) {
  const { id } = useParams();
  const [input, setInput] = useState();
  const [commentlist, setCommentList] = useState(data.comments);
  // const [inputComment, setInputComment] = useRecoilState(commentState);

  const handleInput = e => {
    setInput(e.target.value);
  };

  // const handleSubmit = e => {
  //   setInputComment({ id: data.id, comment: input });
  // };

  const handleSubmit = e => {
    postComment();
    addComment();
    console.log(commentlist);
  };

  function addComment() {
    setCommentList(comment => {
      const prevComment = [...comment];

      const result = [...prevComment, input];
      console.log(result);
      return result;
    });
  }

  const postComment = () => {
    try {
      axios.post(`http://127.0.0.1:8000/movie/comment/`, {
        comment: input,
        movies: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentConDiv>
      <CommentBoxDiv>
        <CommentInputDiv>
          <CommentTitleDiv>한줄평</CommentTitleDiv>
          <CommentInput onChange={handleInput}></CommentInput>
          <CommentSubBtn onClick={handleSubmit}>확인</CommentSubBtn>
        </CommentInputDiv>
      </CommentBoxDiv>
    </CommentConDiv>
  );
}

export default Comment;
