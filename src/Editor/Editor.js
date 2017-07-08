import * as ace from 'brace';
import 'brace/theme/xcode.js';
import 'brace/mode/javascript.js';
import 'brace/ext/language_tools.js';

import $ from 'jquery';
import {JSHINT} from 'jshint';

import * as style from './Editor.scss';
// import utils from '../utils.js';

export class GEditor {
  constructor() {
    // document.getElementById('editor').classList.add(style.editor);
    $('#editor').attr('class', style.editor);
    this.editor_ = ace.edit('editor');
  }

  init() {
    this.editor_.setOptions({
      tabSize: 2,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true
    });
    this.editor_.setTheme('ace/theme/xcode');
    this.editor_.getSession().setMode('ace/mode/javascript');
  }

  hint() {
    const that_ = this.editor_;
    this.editor_.getSession().on('change', function() {
      /* eslint-disable no-undef */
      /* eslint-disable new-cap */
      // options --> https://github.com/jshint/jshint/blob/master/examples/.jshintrc
      JSHINT(that_.getValue(), {
        undef: true,
        browser: true,
        esversion: 6
      });
      const data = JSHINT.data();
      /* eslint-disable */
      /* eslint-disable */
      // console.log(data);
      // utils.catchError('error mesg');
      if (data.hasOwnProperty('errors')) {
        // console.log(data.errors);
      }
    });
  }

  setValue(txt) {
    this.editor_.setValue(txt);
  }

  addCommand(name, key, todo) {
    this.editor_.commands.addCommand({
      name,
      bindKey: key,
      exec: (editor) => {
        todo(editor);
      },
      readOnly: true
    });
  }
}