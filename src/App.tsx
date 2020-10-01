import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// LAYOUT
import { Layout } from './components/layout';

// PAGES
import { HomePage } from './pages/home';
import { MapPage } from './pages/map';

import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          component={() => (
            <Layout headerTitle='MyKuya'>
              <HomePage />
            </Layout>
          )}
        />
        <Route
          path='/map'
          component={() => (
            <Layout showBackIcon>
              <MapPage />
            </Layout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
