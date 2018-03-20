import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Locations from './Locations.js';

class List extends Component {
  render() {
    return (
      <div className='col-sm-3'>
        <ul>
          <Locations locations={this.props.locations}/>
        </ul>
      </div>
    );
  }
}

export default List;
