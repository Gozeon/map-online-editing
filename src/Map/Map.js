import mapboxgl from 'mapbox-gl';
import $ from 'jquery';

import * as style from './Map.scss';
import * as utils from '../utils.js';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';

export class GMap {
  constructor() {
    $('#map').attr('class', style.map);
    this.map_ = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 5,
      center: [-78.880453, 42.897852]
    });
  }

  setCenter(lng, lat, zoom) {
    utils.catchError(new Error('error mesg'));
    this.map_.setCenter([lng, lat]);
    this.map_.setZoom(zoom);
  }
}