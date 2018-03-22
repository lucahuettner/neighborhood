import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LocationInfo from './LocationInfo.js';
import {Route, Link} from 'react-router-dom';


class Locations extends Component {
  render() {
    return (
      this.props.locations.map((location) => (
        <li key={location.id}>
          <Link onClick={() => this.props.animateMarker(location.id)} to={`/list/${location.id}`}>
            <h4>{location.name}</h4>
          </Link>
          <Route path={`/list/${location.id}`} render={() => (
            <LocationInfo location={location}/>
            )}>
          </Route>
        </li>
      ))
    );
  }
}

export default Locations;
