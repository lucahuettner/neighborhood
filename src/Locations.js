import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Locations extends Component {
  render() {
    return (
      this.props.locations.map((location) => (
        <li key={location.name}>{location.name}</li>
      ))
    );
  }
}

export default Locations;
