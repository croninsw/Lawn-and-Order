import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, google } from 'google-maps-react'

const style = {
  // justifyContent: 'left',
//   borderRadius: '15px',
//   border: 'solid 5px black',
  margin: 'auto',
  marginTop: '0px',
  width: '50%',
  height: '50%'
}
class Container extends Component {
  state = {
    //google-maps-react
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    newMarker: false,
  }
  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    return (
      <Map google={this.props.google} style={style} zoom={12} initialCenter={{ lat: 36.1627, lng: -86.7816 }}
        onClick={this.onMapClick}>
        <Marker
          onClick={this.onMarkerClick}
          name={"Shelby Park"}
          address={"Nashville, TN 37206"}
          position={{ lat: 36.1676, lng: -86.7297 }}
          draggable={true}
          onDragend={this.centerMoved} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAFA4NCDHskJYxUCSE2wLRbe4xkCOxnx4Y")
})(Container)