import React, { Component } from 'react';
import Map from './Map.js';
import List from './List.js';
import { GoogleApiWrapper } from 'google-maps-react';
import {Route, Link} from 'react-router-dom';

class Container extends Component {
  state = {
    locations: [
      {name: 'Festungsruine Hohentwiel', id: '4c7d03d548c6236a972a6311', location: {lat: 47.7642964, lng: 8.818025}},
      {name: 'Cineplex Singen', id: '4c337afb3896e21e0b1bea90', location: {lat: 47.7583784, lng: 8.8387182}},
      {name: 'MC Donalds', id: '4de6761bb0fb5cbf0eb1ae6f', location: {lat: 47.753089, lng: 8.85288}},
      {name: 'Kentucky Fried Chicken', id: '53bc13ec498e617a4c4afcd2', location: {lat: 47.7537526, lng: 8.853755}},
      {name: 'Discothek Top-10', id: '4c268387136d20a16783e561', location: {lat: 47.7529114, lng: 8.8884115}},
    ]
  };
  render() {
    fetch('https://api.foursquare.com/v2/venues/4c7d03d548c6236a972a6311?client_id=3KDKYVPQIJ2BMFAWJB5K2EE4LUEOHPYZYJQN55SYCGY50GNW&client_secret=F0GMCYEDRANIHBSG5501YDGIF1IKDJL4CZBRUHUMCRAKK55J&ll=40.7,-74&query=sushi&v=20180210')
    .then((response) => response.json())
    .then((obj) => console.log(obj.response));
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-1'>
            <Link to='/list'>List</Link>
          </div>
          <div className='col-sm-11'>
            <h1>Neighborhood</h1>
          </div>
        </div>
        <div className ='row'>
          <Route path='/list' render={() => (
            <List locations={this.state.locations}/>
        )}/>
          <Map google={this.props.google} locations={this.state.locations} />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyARmShZ82k5hknINJ7jMndOnRDNrEas9Sk',
})(Container);
