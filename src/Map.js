import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Map extends Component {
  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    const self = this
    let markers = [];
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat: 47.75857731, lng: 8.85481229}, // sets center of google map to Singen.
        zoom: 13, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      });

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

      const largeInfowindow = new maps.InfoWindow();

      this.props.locations.forEach(location => { // iterate through locations saved in state
        const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: {lat: location.location.lat, lng: location.location.lng}, // sets position of marker to specified location
          map: this.map, // sets markers to appear on the map we just created on line 35
          title: location.name // the title of the marker is set to the name of the location
        });
        markers.push(marker);
        marker.addListener('click', function() {
          self.populateInfoWindow(this, largeInfowindow);
        });
      });
    }
  }
  populateInfoWindow(marker, infowindow) {
    if (infowindow.marker !== marker) {
      infowindow.marker = marker;
      infowindow.setContent(`<h4> ${marker.title} </h4>`);
      infowindow.open(this.map, marker);
    } else {
      infowindow.open(this.map, marker);
    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
          // width: '100vw', // 90vw basically means take up 90% of the width screen. px also works.
          height: '85vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
        };

    return (// in our return function you must return a div with ref='map' and style.
          <div className='col-sm' ref="map" style={style}>
            loading map...
          </div>
        );
  }
}

export default Map;
