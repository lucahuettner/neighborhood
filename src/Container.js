import React, { Component } from 'react';
import Map from './Map.js';
import List from './List.js';
import { GoogleApiWrapper } from 'google-maps-react';

class Container extends Component {
  state = {
    locations: [
      {name: 'Festungsruine Hohentwiel', location: {lat: 47.7642964, lng: 8.818025}}
    ]
  };
  render() {
    fetch('https://api.foursquare.com/v2/venues/4c7d03d548c6236a972a6311?client_id=3KDKYVPQIJ2BMFAWJB5K2EE4LUEOHPYZYJQN55SYCGY50GNW&client_secret=F0GMCYEDRANIHBSG5501YDGIF1IKDJL4CZBRUHUMCRAKK55J&ll=40.7,-74&query=sushi&v=20180210')
    .then((response) => response.json())
    .then((obj) => console.log(obj.response));
    return (
      <div>
        <h1>Neighborhood</h1>
        <List/>
        <Map google={this.props.google} locations={this.state.locations} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyARmShZ82k5hknINJ7jMndOnRDNrEas9Sk',
})(Container);
