import {JSHINT} from 'jshint';

self.onmessage = function (e) { // eslint-disable-line
  JSHINT(e.data); // eslint-disable-line
  const data = JSHINT.data();
  self.postMessage(data);
};