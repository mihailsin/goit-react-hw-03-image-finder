import React from 'react';
import { Oval } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Oval color="blue" height={200} width={200} />
    </div>
  );
};

export default Loader;
