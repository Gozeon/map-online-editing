// global css
import './theme/theme.scss';

// classes you want to use immediately
import {GMap} from './Map';
import {GEditor} from './Editor';
import {Loadding} from './Loadding';
import $ from 'jquery';
import * as utils from './utils.js';

/**
 * entrance code for SPA
 */
function main() {
  $('.container').css({
    width: '100%',
    height: '100%',
    display: 'flex',
    'flex-direction': 'row'
  });
  $('.container').append('<div id="map"></div>');
  $('.container').append('<div id="content"></div>');
  $('#content').css({
    flex: 1,
    display: 'flex',
    'flex-direction': 'column'
  });
  $('#content').append('<div id="editor"></div>');

  window.Map = new GMap();

  const Editor = new GEditor();
  Editor.init();
  Editor.setValue('// Ctrl+Enter or Command-Enter to Run');
  Editor.addCommand(
    'runCommond',
    {win: 'Ctrl+Enter', mac: 'Command-Enter'},
    function (editor) {
      new Loadding().show();
      if ($('#scripts').get(0)) {
        $('#scripts').remove();
      }
      $('head').append(`<script id="scripts">${editor.getValue()}</script>`);
    }
  );

  window.onerror = function (messageOrEvent) {
    if (messageOrEvent) {
      utils.catchError(new Error(messageOrEvent));
      // console.clear();
    }
    return false;
  };

  // document.getElementById('scripts').onerror = function(error) {
  //   console.log(error);
  //   if (error) {
  //     utils.catchError(new Error(error));
  //     // console.clear();
  //   }
  //   return false;
  // };
}

document.addEventListener('DOMContentLoaded', main);
