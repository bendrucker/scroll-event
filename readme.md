# scroll-event [![Build Status](https://travis-ci.org/bendrucker/scroll-event.svg?branch=master)](https://travis-ci.org/bendrucker/scroll-event)

> Scroll event handler for [value-event](https://github.com/raynos/value-event)


## Install

```
$ npm install --save scroll-event
```


## Usage

```js
var scrollEvent = require('scroll-event')
var h = require('virtual-dom/h')

h('div', {
  'ev-scroll': scrollEvent(scrollHandler)
})
```

## API

#### `scrollEvent(handler, [data])` -> `function`

##### handler

*Required*  
Type: `function`

The handler to call when the element is scrolled.

##### data

Type: `object`  
Default: `{}`

Data to pass to the handler when the element is scrolled. This will include x/y coordinates for the scroll position, the maximum scrollable distance (`{maximum: {x, y}}`), as well as custom properties you define.

## License

MIT © [Ben Drucker](http://bendrucker.me)
