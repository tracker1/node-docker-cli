import { array2Object, splitLines, mapLines } from './utils';

export default [
  {
    re: /^build\b/,
    run(resultp) {
      const lines = splitLines(resultp.raw);

      lines.forEach(function(line) {
        const re = /Successfully built (.*)$/;
        const str = line;
        const m = re.exec(str);

        if (m !== null) {
          if (m.index === re.lastIndex) {
            re.lastIndex++;
          }
          // View your result using the m-variable.
          // eg m[0] etc.
          resultp.success = true;
          resultp.imageId = m[1];
        }
      });

      resultp.response = lines;

      return resultp;
    },
  },
  {
    re: /^run\b/,
    run(resultp) {
      resultp.containerId = resultp.raw.trim();

      return resultp;
    },
  },
  {
    re: /^ps\b/,
    run(resultp) {
      const lines = splitLines(resultp.raw);

      resultp.containerList = mapLines(lines);

      return resultp;
    },
  },
  {
    re: /^images\b/,
    run(resultp) {
      const lines = splitLines(resultp.raw);

      //const debug = require('debug')('docker-cli-js:lib/index.js extractResult images');
      //debug(lines);
      resultp.images = mapLines(lines);

      return resultp;
    },
  },
  {
    re: /^network\s+ls\b/,
    run(resultp) {
      const lines = splitLines(resultp.raw);

      //const debug = require('debug')('docker-cli-js:lib/index.js extractResult images');
      //debug(lines);
      resultp.network = mapLines(lines);

      return resultp;
    },
  },
  {
    re: /^inspect\b/,
    run(resultp) {
      const object = JSON.parse(resultp.raw);

      resultp.object = object;

      return resultp;
    },
  },
  {
    re: /^info\b/,
    run(resultp) {
      const lines = splitLines(resultp.raw);
      resultp.object = array2Object(lines);

      return resultp;
    },
  },
  {
    re: /^search\b/,
    run(resultp) {
      const lines = splitLines(resultp.raw);

      resultp.images = mapLines(lines);

      return resultp;
    },
  },
  {
    re: /^login\b/,
    run(resultp) {
      resultp.login = resultp.raw.trim();

      return resultp;
    },
  },
  {
    re: /^pull\b/,
    run(resultp) {
      resultp.login = resultp.raw.trim();

      return resultp;
    },
  },
  {
    re: /^push\b/,
    run(resultp) {
      resultp.login = resultp.raw.trim();

      return resultp;
    },
  },
];
