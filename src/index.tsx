/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

//@ts-ignore
const mapboxgl = require('!mapbox-gl');
 
mapboxgl.accessToken = 'pk.eyJ1IjoicGFzdGl0byIsImEiOiJjbGxjcTFkdmgwMnk5M3BwNHZ1M3VxM2R2In0.HRk4tbrBlVwzYeWCrN4p1g';
 

if ( !navigator.geolocation ) {
  alert('Tu navegador no tiene opción de Geolocation');
  throw new Error('Tu navegador no tiene opción de Geolocation');
}



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);