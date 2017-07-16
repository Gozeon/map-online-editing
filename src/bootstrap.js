// global css
import './theme/theme.scss';

import $ from 'jquery';
import mapboxgl from 'mapbox-gl';
import * as ace from 'brace';
import 'brace/theme/monokai.js';
import 'brace/mode/javascript.js';
import 'brace/ext/language_tools.js';

import * as style from './main.scss';
// import CatchError from './catchError.js';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';

$('div.container').addClass(style.container);

// editor
$('div.container').append('<div id="editor"></div>');
$('div#editor').addClass(style.editor);
const editor = ace.edit('editor');
const defaultValue = [
  '// Run: Ctrl + Enter or Command + Enter',
  '// Reference: https://www.mapbox.com/mapbox-gl-js/api/',
  '// Example: map.setCenter([-71.97722138410576, -13.517379300798098])'
].join('\n');
editor.setValue(defaultValue);
editor.setOptions({
  tabSize: 2,
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true
  // useWorker: false
});
editor.setTheme('ace/theme/monokai');
editor.getSession().setMode('ace/mode/javascript');
editor.commands.addCommand({
  name: 'runCommond',
  bindKey: {win: 'Ctrl+Enter', mac: 'Command-Enter'},
  exec: (editor) => {
    $('body').append(`<script id="scripts">${editor.getValue()}</script>`);
  },
  readOnly: true
});

// map
$('div.container').append('<div id="map"></div>');
$('div#map').addClass(style.map);
window.map = new mapboxgl.Map({ // eslint-disable-line
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  zoom: 5,
  center: [-78.880453, 42.897852]
});