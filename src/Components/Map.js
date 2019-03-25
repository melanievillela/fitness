import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Location = ({ text }) => 
    <div>
        <i className="material-icons" style={{fontSize: "2.5rem", color: "#6a1b9a"}}>place</i>
    </div>;

class Map extends Component {

    static defaultProps = {
        center: {
            lat: 29.760427,
            lng: -95.369804
        },
        zoom: 11
    };

  	render() {

		return (
			<div style={{ height: '100vh', width: '100%' }} id="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyA-Ov5EC9q8ZJgtV04pkLZmbCaeG_oKVaY" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals={true}
                >
                    <Location 
                        lat={29.731432}
                        lng={-95.484154}
                    />
                </GoogleMapReact>
            </div>
		)
  	}
}

export default Map;