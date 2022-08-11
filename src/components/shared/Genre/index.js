import React from 'react';
import { GenreItem, GenreWrapper } from './styled';

const GenreBox = ({ genre }) => {
  return (
    <GenreWrapper>
      {genre &&
        genre.map((el, index) => (
          <GenreItem key={index} el={el}>
            {el}
          </GenreItem>
        ))}
    </GenreWrapper>
  );
};

export default GenreBox;
