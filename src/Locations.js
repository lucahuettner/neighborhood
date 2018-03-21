import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Locations extends Component {
  render() {
    return (
      this.props.locations.map((location) => (
        <li key={location.id}>
          {location.name}
          <img className='img-responsive' src='https://igx.4sqi.net/img/general/500x300/5g-RfDxQ_ktEWdD-I213xGBW45IbgWrrYK03GtDjuFs.jpg'/>
          <address>
            <strong>Address:</strong><br />
            Auf dem Hohentwiel 2a
          </address>
        </li>
      ))
    );
  }
}

export default Locations;
