import $ from 'jquery';

module.exports = {
  catchError: (error) => {
    if (error) {
      const errors = [];
      errors.push(error);
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
        const error = errors[i];
        $('#error').append(`<div>${error.name}: ${error.message}</div>`);
      }
    } else {
      if ($('#error').get(0)) {
        $('#error').empty();
      }
      $('#error').hide();
    }
  }
};


