import styled from 'styled-components';
import COLOR from './../../../constants/color';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RatingWrapper = styled.div`
  width: 100%;
  height: 200px;
  background: ${COLOR.YELLOW};
  color: ${COLOR.BLACK};
`;
export const CommentListWrapper = styled.div`
  width: 100%;
  height: auto;
  background: ${COLOR['GRAY-100']}
  color: ${COLOR.BLACK}
`;
export const InputWrapper = styled.div`
  width: 100%;
  height: 200px;
  background: ${COLOR.MINT};
  color: ${COLOR.BLACK};
  display: flex;
`;
export const Input = styled.input.attrs({
  placeholder: '댓글을 작성하려면 로그인 해주세요',
})`
  width: 800px;
  padding: 10px;
  font-size: 1.2rem;
  font-family: 'BMHANNAAir', sans-serif;
  border: none;
  border-radius: 8px;
  background: ${COLOR.WHITE};
  margin-right: 20px;
`;
export const SubBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  padding: 10px;
  background: ${COLOR.RED};
  border: none;
  font-size: 1.3rem;
  color: ${COLOR.WHITE};
  font-weight: bold;
`;
// export const CommentConDiv = styled.div`
//   width: 100%;
//   height: auto;
//   margin: 0 auto;
//   display: flex;
//   justify-content: center;
// `;
// export const CommentBoxDiv = styled.div`
//   width: 80%;
//   padding-left: 30px;
// `;
// export const CommentInputDiv = styled.div`
//   width: 800px;
//   display: flex;
// `;
// export const CommentTitleDiv = styled.div`
//   flex: 0.2;
//   color: #b3b3b3;
// `;
// export const CommentInput = styled.input`
//   flex: 0.8;
//   padding: 10px;
//   font-size: 1.2rem;
//   font-family: 'BMHANNAAir', sans-serif;
//   border: none;
//   border-radius: 8px;
//   background: white;
//   margin-right: 20px;
// `;
// export const CommentSubBtn = styled.button`
//   width: 80px;
//   height: 50px;
//   border-radius: 8px;
//   padding: 10px;
//   background: #be123c;
//   border: none;
//   font-size: 1.3rem;
//   color: white;
//   font-weight: bold;
// `;
