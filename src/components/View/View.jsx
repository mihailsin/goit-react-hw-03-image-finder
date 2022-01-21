import React, { Component, Fragment } from 'react';
import fetchPictures from '../../services/';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import Button from '../Button';
import { toast } from 'react-toastify';

class View extends Component {
  state = {
    response: null,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchQuery !== this.props.searchQuery &&
      this.props.searchQuery.trim() !== ''
    ) {
      this.setState({ status: 'pending', response: null });
      try {
        const response = await fetchPictures(this.props.searchQuery);

        if (response.data.hits.length === 0) {
          toast.error('Sorry! There are no pictures matching your query.');
        }

        this.setState({ response, status: 'resolved' });
      } catch (error) {
        this.setState({ status: 'rejected' });
        console.log(error.message);
        toast.error(`${error.message}`);
      }
    }
  }

  render() {
    const { response } = this.state;
    const { status } = this.state;

    return (
      <Fragment>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <Fragment>
            <ImageGalleryItem obj={response} />
            {response.data.hits.length > 12 && <Button />}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default View;
