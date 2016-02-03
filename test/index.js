/**
 * Imports
 */

var tween = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var frame = tween({width: 10}, {width: 100})
  var num = 350 / 16.66

  t.deepEqual(frame(0), {width: 10})
  t.deepEqual(frame(Math.round(num)), {width: 100})
  t.end()
})
