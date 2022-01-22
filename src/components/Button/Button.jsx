import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClickHandler }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type="button" onClick={onClickHandler}>
        Load More
      </button>
    </div>
  );
};

export default Button;
