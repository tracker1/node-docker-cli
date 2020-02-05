import camelCase from 'lodash.camelcase';

const array2Oject = function(lines) {
  return lines.reduce(function(object, linep) {
    const line = linep.trim();
    if (line.length === 0) {
      return object;
    }

    const parts = line.split(':');
    let key = parts[0];
    const value = parts.slice(1).join(':');
    key = camelCase(key);
    object[key] = value.trim();
    return object;
  }, {});
};

export default array2Oject;
