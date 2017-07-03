// global css
import './theme/theme.scss';

// classes you want to use immediately
import {GMap} from './Map';
import {GEditor} from './Editor';
import $ from 'jquery';

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
  window.Map = new GMap();
  window.Editor = new GEditor();
  window.Editor.init();
  Map.setCenter(123, 23, 1);
}

document.addEventListener('DOMContentLoaded', main);
