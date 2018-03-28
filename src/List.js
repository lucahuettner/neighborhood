import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Locations from './Locations.js';

class List extends Component {
  render() {
    return (
      <div className='col-sm-3'>
        <select defaultValue='all' onChange={(e) => this.props.updateCategory(e.target.value)}>
          <option value='all'>All</option>
          <option value='restaurants'>Restaurants</option>
          <option value='leisure'>Leisure activities</option>
          <option value='cultural'>Cultural places</option>
        </select>
        <ul className='list-unstyled text-left'>
          <Locations
            locations={this.props.filterCategory()}/>
        </ul>
      </div>
    );
  }
}

export default List;
