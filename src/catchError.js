import $ from 'jquery';
let errors = [];

/**
 * to show errors in html
 * @param {*} errors
 */
function showError(errors) {
  $('#content').append('<div id="error"></div>');
  $('#error').css({
    flex: 1,
    padding: '8px 10px',
    overflow: 'auto',
    color: 'red',
    'border-top': '1px solid #ccc'
  });
  $('#error').empty();
  for (let i = 0; i < errors.length; i++) {
    $('#error').append(`<div>Error: ${errors[i]}</div>`);
  }
}

export default class CatchError {
  static addError(error) {
    errors.push(error);
    showError(errors);
  }

  static emptyError() {
    errors = [];
    if ($('#error').get(0)) {
      $('#error').empty();
    }
  }

  static clearError() {
    errors = [];
    if ($('#error').get(0)) {
      $('#error').hide();
    }
  }
}