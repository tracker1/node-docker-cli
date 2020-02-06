import { cliTable2Json } from 'cli-table-2-json';
import camelCase from 'lodash.camelcase';

export function camelCaseObject(o) {
  if (typeof o !== 'object') return o;
  if (Array.isArray(o)) return o.map(camelCaseObject);
  if (!o) return o;
  return Object.entries(o).reduce(
    (o, [k, v]) => Object.assign(o, { [camelCase(k.trim())]: v }),
    {}
  );
}

export default lines => cliTable2Json(lines).map(camelCaseObject);
