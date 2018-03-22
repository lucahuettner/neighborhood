import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LocationInfo extends Component {
  render() {
    const location = this.props.location;
    return (
      <div>
        <img className='img-responsive' src={location.img}/>
        <p>
          <strong>Rating: </strong>
          {location.rating}
        </p>
      </div>
    );
  }
}

export default LocationInfo;
