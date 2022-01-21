import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ pictures }) => {
  return (
    pictures &&
    pictures.map(({ id, webformatURL, tags }) => (
      <li key={id} className={styles.imageGalleryItem}>
        <img
          className={styles.imageGalleryItem__image}
          src={webformatURL}
          alt={tags}
        />
      </li>
    ))
  );
};

export default ImageGalleryItem;
