import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "../Home/Home.css"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 36.1627,
      lng: -86.7816
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map" style={{ height: '300px', width: '325px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAFA4NCDHskJYxUCSE2wLRbe4xkCOxnx4Y"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={36.126646}
            lng={-86.749818}
            text={"Sams Yard"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

