# json7 [![Build Status](https://travis-ci.org/mastilver/json7.svg?branch=master)](https://travis-ci.org/mastilver/json7) [![Coverage Status](https://coveralls.io/repos/github/mastilver/json7/badge.svg?branch=master)](https://coveralls.io/github/mastilver/json7?branch=master)

> A better alternative of JSON


## Install

```
$ npm install --save json7
```


## Usage

```js
import json7 from 'json7';

const a = {
    text: 'test',
    date: new Date(2016, 7, 4),
};
a[1] = a;

const json = json7.stringify(a);
const b = json7.parse(json);

console.log(b === b[1]); // => true
console.log(b);
/* => {
    text: 'test',
    date: Thu Aug 04 2016 00:00:00 GMT+0100 (GMT Summer Time),
    a: {...}
}
*/  
```


## API

### json7.stringify(object)

Returns a string representing the inputted object.

#### object

Type: `any`


### json7.parse(string)

#### string

Type: `String`

The json7 representation of an object.

## License

MIT © [Thomas Sileghem](http://mastilver.com)
