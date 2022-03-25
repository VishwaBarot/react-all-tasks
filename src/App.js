import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header/head';
import Footer from './footer/footer';
import RouteApp from './routeApps/router';

const App = () => (
  <BrowserRouter>
    <Header />
    <RouteApp />
    <Footer />
  </BrowserRouter>
);
export default App;
