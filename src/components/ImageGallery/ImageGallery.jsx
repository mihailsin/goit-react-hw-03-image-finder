import React from 'react';
import styles from './ImageGallery.module.css';
import propTypes from 'prop-types';

const ImageGallery = ({ children }) => {
  const gallery = styles.imageGallery;
  return <ul className={gallery}>{children}</ul>;
};

ImageGallery.propTypes = {
  children: propTypes.object.isRequired,
};

export default ImageGallery;
