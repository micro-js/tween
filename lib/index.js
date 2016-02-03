/**
 * Modules
 */

var mapObj = require('@f/map-obj')

/**
 * Constants
 */

var defaultDuration = 350
var fps60 = 1000 / 60

/**
 * Expose tween
 */

module.exports = tween

/**
 * tween
 */

function tween (start, end, duration, easing, interval) {
  duration = duration === undefined ? defaultDuration : duration
  interval = interval === undefined ? fps60 : interval
  easing = easing === undefined ? linear : easing

  var frames = duration / interval

  return function (n) {
    if (frames - n < 1) return end
    return mapObj(function (val, key) {
      return tweenValue(n / frames, val, end[key], easing)
    }, start)
  }
}

/**
 * Helpers
 */

function linear (t) {
  return t
}

function tweenValue (t, start, end, ease) {
  return start + ease(t) * (end - start)
}
