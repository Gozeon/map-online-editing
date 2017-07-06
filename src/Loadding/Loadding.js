import $ from 'jquery';
import * as style from './Loadding.scss';

export class Loadding {
  constructor() {
    $('body').append($('<div id="loadding"><div>')
      .attr('class', style.playground)
      .append($('<div></div>').attr('class', style.spinner)));
  }

  show() {
    $('div#loadding').css('display', 'flex');
  }

  hide() {
    $('div#loadding').hide();
  }
}