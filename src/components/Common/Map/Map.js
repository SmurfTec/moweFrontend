import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

 const MapContainer = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [mapCenter, setMapCenter] = useState({
    lat: 37.7749,
    lng: -122.4194
  });

  const onMapClicked = (mapProps, map, clickEvent) => {
    const { latLng } = clickEvent;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setSelectedPlace({ lat, lng });
    setMapCenter({ lat, lng });
  };

  return (
    <Map
      google={props.google}
      zoom={4}
      style={mapStyles}
      initialCenter={{ lat: mapCenter.lat, lng: mapCenter.lng }}
      onClick={onMapClicked}
    >
      {selectedPlace && (
        <Marker
          position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
        />
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB2v4lojtfpyGunHUDeJJerRxgLxeWt_Ag'
})(MapContainer);
