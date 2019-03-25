// import React, { Component } from 'react'
// import { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

// const style = {
//   // margin: 'auto',
//   // marginTop: '0px',
//   width: '25%',
//   height: '40%',
// }
// class Container extends Component {
//   state = {
//     //google-maps-react
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {},
//     newMarker: false,
//   }
//   onInfoWindowClose = () => {
//     this.setState({
//       showingInfoWindow: false,
//       activeMarker: null
//     })
//   }
//   render() {
//     return (
//       <Map google={this.props.google} style={style} zoom={12} initialCenter={{ lat: 36.1627, lng: -86.7816 }}
//         onClick={this.onMapClick}>
//         <Marker/>
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onInfoWindowClose}>
//           <div>
//             <h1>{this.state.selectedPlace.name}</h1>
//           </div>
//         </InfoWindow>
//       </Map>
//     )
//   }
// }
// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyAFA4NCDHskJYxUCSE2wLRbe4xkCOxnx4Y")
// })(Container)

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "../Home/Home.css"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
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

export default SimpleMap;
