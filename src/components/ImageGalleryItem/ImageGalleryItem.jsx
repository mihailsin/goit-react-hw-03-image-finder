import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { pictures, onClickHandler, getId } = this.props;
    return pictures.map(({ webformatURL, tags, largeImageURL }, idx) => (
      <li
        onClick={onClickHandler}
        key={idx}
        className={styles.imageGalleryItem}
      >
        <img
          onClick={() => getId(largeImageURL)}
          className={styles.imageGalleryItem__image}
          src={webformatURL}
          alt={tags}
        />
      </li>
    ));
  }
}

export default ImageGalleryItem;
