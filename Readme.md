
# tween

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Simple, purely functional tweening function.

## Installation

    $ npm install @f/tween

## Usage

```js
var tween = require('@f/tween')
var applyStyles = require('@f/apply-styles')

function animate (element, start, end, duration, easing, cb) {
  var tick = tween(start, end)
  var t = 0

  requestAnimationFrame(function ticker () {
    var props = tick(t)
    applyStyles(element, props)

    if (props !== end) {
      t++
      requestAnimationFrame(ticker)
    } else {
      cb()
    }
  })
}

animate(element, {width: 10, left: 2}, {width: 100, left: 200})
```

## API

### tween(start, end, duration, easing, interval)

- `start` - Object containing the initial value of the properties you want to tween.
- `end` - Object containing the final value of the properties you want to tween.
- `duration` - The length of time, in milliseconds, your tween should be for. Defaults to 350ms.
- `easing` - An easing function that takes a tick value and interpolates it according to some easing function. Defaults to linear.
- `interval` - The tick length you want to use, in milliseconds. Defaults to 16.66ms (i.e. a single requestAnimationFrame timer).

**Returns:** A partially applied function that accepts a single parameter, `t` and returns the interpolated properties for that tick. The `t` parameter is a unitless value that corresponds to the frame of the tween you are requesting. So, if you are using `requestAnimationFrame` and the default interval, you just increment t once for each tick. `t` does not need to be an integer.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/tween.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/tween
[git-image]: https://img.shields.io/github/tag/micro-js/tween.svg
[git-url]: https://github.com/micro-js/tween
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/tween.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/tween
