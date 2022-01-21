import React, { Component, Fragment } from 'react';
import api from '../../services/';
import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import Button from '../Button';
import { toast } from 'react-toastify';

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

class View extends Component {
  state = {
    response: [],
    length: 0,
    status: 'idle',
  };

  onClickHandler = async () => {
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
        scroll.scrollToBottom();
      } catch (error) {
        this.setState({ status: 'rejected' });
        console.log(error.message);
        toast.error(`${error.message}`);
      }
    }
  }

  render() {
    const { response, length, status } = this.state;
    const difference = length - response.length;
    console.log(difference);
    return (
      <Fragment>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <ImageGallery>
            <ImageGalleryItem pictures={response} />
          </ImageGallery>
        )}
        {difference !== 0 && <Button clickHandler={this.onClickHandler} />}
      </Fragment>
    );
  }
}

export default View;
