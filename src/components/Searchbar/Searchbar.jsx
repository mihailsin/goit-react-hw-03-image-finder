import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  submitHandler = e => {
    const { inputValue } = this.state;

    e.preventDefault();
    this.props.onSubmit(inputValue);
    e.currentTarget.reset();
  };

  inputHandler = e => {
    const { value } = e.target;

    this.setState({ inputValue: value });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.submitHandler}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.inputHandler}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
