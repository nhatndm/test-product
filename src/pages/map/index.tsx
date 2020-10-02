import React from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import { useHistory } from 'react-router-dom';

// STYLE
import {
  MapContainer,
  MapElement,
  LoadingElement,
  ConfirmButton,
} from './style';

// INTERFACE
import { MapAttribute } from '../../interface';

interface TProps extends MapAttribute {
  setMarker: (lat: number, lng: number) => void;
}

export const MapPage = ({ position, zoom, setMarker }: TProps) => {
  const history = useHistory();
  let { lat, lng } = position;

  const MapComponent = withScriptjs<any>(
    withGoogleMap((props) => (
      <GoogleMap zoom={zoom} center={position}>
        {props.isMarkerShown && (
          <Marker
            draggable
            position={position}
            onDragEnd={(v) => {
              lat = v.latLng.lat();
              lng = v.latLng.lng();
            }}
          />
        )}
        <ConfirmButton
          onClick={() => {
            setMarker(lat, lng);
            history.push('/');
          }}
        >
          <p>Confirm</p>
        </ConfirmButton>
      </GoogleMap>
    )),
  );

  return (
    <MapComponent
      isMarkerShown
      googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyB_LVdc985GrCPqa4PtUce67Fzz0Qiacuo'
      loadingElement={<LoadingElement />}
      containerElement={<MapContainer />}
      mapElement={<MapElement />}
    />
  );
};
