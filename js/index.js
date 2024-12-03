import camelCase from 'camelcase';

import { addGrid } from './grid.js';

addGrid();

console.log(camelCase('foo-bar'));

const exclaim = (string) => string + '!!!';
const listen = (string) => 'Listen up! ' + string;
const uppercase = (string) => string.toUpperCase();

console.log('foo' |> listen(%) |> exclaim(%) |> uppercase(%));
