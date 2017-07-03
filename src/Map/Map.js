import mapboxgl from 'mapbox-gl';
import $ from 'jquery';

import * as style from './Map.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';

export class GMap {
  constructor() {
    $('.container').append('<div id="map"></div>');
    // document.getElementById('map').classList.add(style.map);
    $('#map').attr('class', style.map);
    this.map_ = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 5,
      center: [-78.880453, 42.897852]
    });
  }

  setCenter(lng, lat, zoom) {
    this.map_.setCenter([lng, lat]);
    this.map_.setZoom(zoom);
  }
}