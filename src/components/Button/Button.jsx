import React from 'react';

const Button = ({ clickHandler }) => {
  return (
    <button type="button" onClick={clickHandler}>
      Load More
    </button>
  );
};

export default Button;
