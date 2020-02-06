import a2o from './array-to-object';
import ml, { camelCaseObject as cco } from './map-lines';

export const array2Object = a2o;
export const splitLines = input => String(input).split(/\r?\n/g);
export const mapLines = ml;
export const camelCaseObject = cco;
