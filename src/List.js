import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Locations from './Locations.js';

class List extends Component {
  render() {
    return (
      <div className='col-sm-3'>
        <ul className='list-unstyled text-left'>
          <Locations
            locations={this.props.locations}
            animateMarker={this.props.animateMarker}/>
        </ul>
      </div>
    );
  }
}

export default List;
