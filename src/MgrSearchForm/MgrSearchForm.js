import React, { Component } from 'react'
import './MgrSearchForm.scss'

class MgrSearchForm extends Component {
 constructor(props) {
  super(props);
  this.state = {
   searchQuery: '',
  };
 }

 handleChange = (event) => {
  this.setState({ searchQuery: event.target.value })
 };

 searchMovies = (event) => {
  event.preventDefault()
  // this.props.searchMovies(this.state.searchQuery);
  this.setState({ searchQuery: '' })
 };


clearText = (event) => {
  event.preventDefault()
  this.setState({searchQuery: ''})
} 


 render() {
  return (
   <form className="search-bar">
    <input
     aria-label="search-guests-input"
     name="searchQuery"
     onChange={this.handleChange}
     placeholder="Search Guest Name"
     type="text"
     value={this.state.searchQuery}
    />
    <button className="mgr-search-btn" onClick={this.searchGuests}>Find</button>
    <button className="clear-text-btn" onClick={this.clearText}>Clear</button>
   </form>
  );
 }
}

export default MgrSearchForm