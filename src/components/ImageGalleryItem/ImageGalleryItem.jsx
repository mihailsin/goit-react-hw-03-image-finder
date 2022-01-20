import React, { Component } from 'react';
import fetchPictures from '../../services/';

class ImageGalleryItem extends Component {
  state = {
    response: null,
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ isLoading: true });
      try {
        const response = await fetchPictures(this.props.searchQuery);
        this.setState({ response });
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { response } = this.state;
    console.log(this.state.response);

    if (response) {
      const pictures = response.data.hits;
      console.log(pictures);

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
