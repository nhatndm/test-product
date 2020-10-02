/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Geocode from 'react-geocode';

// LAYOUT
import { Layout } from './components/layout';

// PAGES
import { HomePage } from './pages/home';
import { MapPage } from './pages/map';

// INTERFACE
import { MapAttribute } from './interface';

import './App.css';
interface TState extends MapAttribute {
  address: string;
}

export const App = () => {
  const [appState, setAppState] = useState<TState>({
    position: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
    address: '',
  });

  useEffect(() => {
    Geocode.setApiKey('AIzaSyB_LVdc985GrCPqa4PtUce67Fzz0Qiacuo');
  }, []);

  useEffect(() => {
    const { position } = appState;

    Geocode.fromLatLng(String(position.lat), String(position.lng)).then(
      (response) => {
        const address = response.results[0].formatted_address;
        setAppState({ ...appState, address });
      },
      (error) => {
        console.error(error);
      },
    );
  }, [appState.position]);

  const setMarker = (lat: number, lng: number) => {
    return setAppState({
      ...appState,
      position: {
        lat,
        lng,
      },
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          component={() => (
            <Layout headerTitle='MyKuya' showFooter>
              <HomePage address={appState.address} />
            </Layout>
          )}
        />
        <Route
          path='/map'
          component={() => (
            <Layout showBackIcon>
              <MapPage
                position={appState.position}
                zoom={appState.zoom}
                setMarker={setMarker}
              />
            </Layout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
