import React from 'react';
import styles from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

const ImageGalleryItem = ({ pictures, onClickHandler, getPictureUrl }) => {
  return pictures.map(({ webformatURL, tags, largeImageURL }, idx) => (
    <li onClick={onClickHandler} key={idx} className={styles.imageGalleryItem}>
      <img
        onClick={() => getPictureUrl(largeImageURL)}
        className={styles.imageGalleryItem__image}
        src={webformatURL}
        alt={tags}
      />
    </li>
  ));
};

ImageGalleryItem.propTypes = {
  pictures: propTypes.array.isRequired,
  onClickHandler: propTypes.func.isRequired,
  getPictureUrl: propTypes.func.isRequired,
};

export default ImageGalleryItem;
