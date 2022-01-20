import React, { Component } from 'react';
import fetchPictures from '../../services/';

class ImageGalleryItem extends Component {
  state = {
    response: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      fetchPictures(this.props.searchQuery).then(response =>
        this.setState({ response }),
      );
    }
  }

  render() {
    const { response } = this.state;

    if (response) {
      const pictures = response.data.hits;

      return pictures.map(({ id, previewURL, tags }) => (
        <li key={id} className="gallery-item">
          <img src={previewURL} alt={tags} />
        </li>
      ));
    }
    return null;
  }
}

export default ImageGalleryItem;
