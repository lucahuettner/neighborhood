import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Locations extends Component {
  render() {
    return (
      this.props.locations.map((location) => (
        <li key={location.id}>
          {location.name}
          <img className='img-responsive' src={location.img}/>
          <p>
            <strong>Rating: </strong>
            {location.rating}
          </p>
        </li>
      ))
    );
  }
}

export default Locations;
