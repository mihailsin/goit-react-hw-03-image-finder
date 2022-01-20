import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ children }) => {
  const gallery = styles.imageGallery;
  return <ul className={gallery}>{children}</ul>;
};

export default ImageGallery;
