// global css
import './theme/theme.scss';

import $ from 'jquery';
import mapboxgl from 'mapbox-gl';
import * as ace from 'brace';
import 'brace/theme/xcode.js';
import 'brace/mode/javascript.js';
import 'brace/ext/language_tools.js';

import * as style from './main.scss';
// import CatchError from './catchError.js';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';

/**
 * entrance code for SPA
 */
function main() {
  $('div.container').addClass(style.container);
  $('div.container').append('<div id="map"></div>');
  $('div.container').append('<div id="editor"></div>');
  $('div#map').addClass(style.map);
  $('div#editor').addClass(style.editor);
  window.map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    zoom: 5,
    center: [-78.880453, 42.897852]
  });

  window.editor = ace.edit('editor');
  window.editor.setOptions({
    tabSize: 2,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true
    // useWorker: false
  });
  window.editor.setTheme('ace/theme/xcode');
  window.editor.getSession().setMode('ace/mode/javascript');
}

document.addEventListener('DOMContentLoaded', main);
