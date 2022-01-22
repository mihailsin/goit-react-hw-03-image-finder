import React, { Component } from 'react';
import api from '../../services/';
import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import Button from '../Button';
import Modal from '../Modal';

import { toast } from 'react-toastify';

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

class View extends Component {
  state = {
    response: [],
    length: 0,
    status: 'idle',
    showModal: false,
    largeImageUrl: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchQuery !== this.props.searchQuery &&
      this.props.searchQuery.trim() !== ''
    ) {
      api.resetPage();
      this.setState({ status: 'pending' });
      try {
        const response = await api.fetchPictures(this.props.searchQuery);
        const hits = response.data.hits;
        const totalHits = response.data.totalHits;
        if (hits.length === 0) {
          toast.error('Sorry! There are no pictures matching your query.');
        }
        this.setState({
          response: hits,
          length: totalHits,
          status: 'resolved',
        });
      } catch (error) {
        this.setState({ status: 'rejected' });
        console.log(error.message);
        toast.error(`${error.message}`);
      }
    }
  }

  onButtonClickHandler = async () => {
    this.setState({ status: 'pending' });
    api.pageIncrement();
    try {
      const response = await api.fetchPictures(this.props.searchQuery);
      const hits = response.data.hits;
      this.setState(prevState => {
        return {
          response: [...prevState.response, ...hits],
          status: 'resolved',
        };
      });
      scroll.scrollToBottom();
    } catch (error) {
      this.setState({ status: 'rejected' });
      console.log(error.message);
      toast.error(`${error.message}`);
    }
  };

  toggleModal = e => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  getUrl = url => {
    this.setState({ largeImageUrl: url });
  };

  render() {
    const { response, length, status, showModal, largeImageUrl } = this.state;
    const picturesLeft = length - response.length;
    return (
      <>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <ImageGallery>
            {response.length !== 0 && (
              <ImageGalleryItem
                onClickHandler={this.toggleModal}
                pictures={response}
                getId={this.getUrl}
              />
            )}
          </ImageGallery>
        )}
        {picturesLeft !== 0 && (
          <Button onClickHandler={this.onButtonClickHandler} />
        )}
        {showModal && largeImageUrl && (
          <Modal url={largeImageUrl} closeModal={this.toggleModal}></Modal>
        )}
      </>
    );
  }
}

export default View;
