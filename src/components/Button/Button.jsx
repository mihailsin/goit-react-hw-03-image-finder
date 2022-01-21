import React from 'react';
import styles from './Button.module.css';

const Button = ({ clickHandler }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type="button" onClick={clickHandler}>
        Load More
      </button>
    </div>
  );
};

export default Button;
