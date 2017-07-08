// global css
import './theme/theme.scss';

// classes you want to use immediately
import {GMap} from './Map';
import {GEditor} from './Editor';
import {Loadding} from './Loadding';
import $ from 'jquery';
import CatchError from './catchError.js';

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

  const Editor = new GEditor('// Ctrl+Enter or Command-Enter to Run');
  Editor.init();
  Editor.hint();
  Editor.setValue(localStorage.getItem('code'));
  Editor.addCommand(
    'runCommond',
    {win: 'Ctrl+Enter', mac: 'Command-Enter'},
    function (editor) {
      localStorage.setItem('code', editor.getValue());
      Loadding.show();
      CatchError.emptyError();
      editor.setReadOnly(true);
      setTimeout(function () {
        $('head').append(`<script id="scripts">${editor.getValue()}</script>`);
        Loadding.hide();
        editor.setReadOnly(false);
      }, 1800);
    }
  );

  window.onerror = function (messageOrEvent) {
    if (messageOrEvent) {
      CatchError.addError([messageOrEvent, 'The browser will refresh after 5 seconds']);
      // console.clear();
      setTimeout(function() {
        location.reload();
      }, 5000);
    }
    return false;
  };
}

document.addEventListener('DOMContentLoaded', main);
