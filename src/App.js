import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';

class App extends Component {
  state = {
    searchQuery: '',
  };

  handleQuery = inputValue => {
    this.setState({ searchQuery: inputValue });
  };

  render() {
    const query = this.state.searchQuery;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleQuery} />
        <ImageGallery>
          <ImageGalleryItem searchQuery={query} />
        </ImageGallery>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
