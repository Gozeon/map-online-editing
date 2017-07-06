import $ from 'jquery';
import * as style from './Loadding.scss';

export class Loadding {

  static show() {
    $('body').append($('<div id="loadding"><div>')
      .attr('class', style.playground)
      .append($('<div></div>').attr('class', style.spinner)));
    $('div#loadding').css('display', 'flex');
  }

  static hide() {
    if ($('div#loadding')) {
      $('div#loadding').hide();
    }
  }
}