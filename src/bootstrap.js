// global css
import './theme/theme.scss';

import $ from 'jquery';
import mapboxgl from 'mapbox-gl';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css';
import * as ace from 'brace';
import 'brace/theme/monokai.js';
import 'brace/mode/javascript.js';
import 'brace/ext/language_tools.js';

import * as style from './main.scss';
// import CatchError from './catchError.js';

mapboxgl.accessToken = 'pk.eyJ1IjoiZHozMTY0MjQiLCJhIjoiNzI3NmNkOTcyNWFlNGQxNzU2OTA1N2EzN2FkNWIwMTcifQ.NS8KWg47FzfLPlKY0JMNiQ';

$('div.container').addClass(style.container);
$('div.container').append('<div id="top"></div>');
$('div#top').addClass(style.top);

// console
$('div#top').append('<div id="console"></div>');
$('div#console').addClass(style.console);
$('div#console').append('<h3>Metrics</h3>');
$('div#console').append('<ul id="errorsList"></ul>');

// editor
$('div#top').append('<div id="editor"></div>');
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
    if ($('#scripts').get(0)) {
      $('#scripts').remove();
    }
    if ($('ul#errorsList').find('li').length > 0) {
      return;
    }
    $('body').append(`<script id="scripts">${editor.getValue()}</script>`);
  },
  readOnly: true
});
const Worker = require('worker-loader!./worker.js');
const worker = new Worker; // eslint-disable-line
editor.getSession().on('change', function() {
  worker.postMessage(editor.getValue());
});
worker.onmessage = function (e) {
  $('ul#errorsList').empty();
  if (Object.prototype.hasOwnProperty.call(e.data, 'errors')) {
    for (let i = 0; i < e.data.errors.length; i++) {
      $('ul#errorsList').append(`<li>${e.data.errors[i].reason}</li>`);
    }
  }
  if (Object.prototype.hasOwnProperty.call(e.data, 'unused')) {
    for (let i = 0; i < e.data.unused.length; i++) {
      $('ul#errorsList').append(`<li>unused: ${e.data.unused[i].name}</li>`);
    }
  }
};

// map
$('div.container').append('<div id="map"></div>');
$('div#map').addClass(style.map);
window.map = new mapboxgl.Map({ // eslint-disable-line
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v9',
  zoom: 5,
  center: [-78.880453, 42.897852]
});
