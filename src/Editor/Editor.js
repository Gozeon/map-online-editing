import * as ace from 'brace';
import 'brace/theme/xcode.js';
import 'brace/mode/javascript.js';
import 'brace/ext/language_tools.js';

import $ from 'jquery';

import * as style from './Editor.scss';

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