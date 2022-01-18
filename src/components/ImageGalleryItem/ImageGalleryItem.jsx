import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '24271792-2ae9c4be49492e469cc4e2f34';
// const REQUEST_PARAMS =
//   'image_type=photo&orientation=horizontal&safesearch=true';

class ImageGalleryItem extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      axios
        .get(`https://pixabay.com/api/?key=${KEY}&q=${this.props.searchQuery}`)
        .then(response => {
          console.log(response);
        });
    }
  }

  render() {
    return (
      <li className="gallery-item">
        item
        <img src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
