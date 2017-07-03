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
  Map.setCenter(123, 23, 1);

  const Editor = new GEditor();
  Editor.init();
  Editor.setValue('// Ctrl+Enter or Command-Enter to Run');
  Editor.addCommand(
    'runCommond',
    {win: 'Ctrl+Enter', mac: 'Command-Enter'},
    function (editor) {
      console.log(editor);
    }
  );
}

document.addEventListener('DOMContentLoaded', main);
