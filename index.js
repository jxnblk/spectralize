
var Color = require('color')
var defaults = require('lodash').defaults
var keyword = require('closest-color-keyword')

module.exports = function(opts) {

  opts = opts || {}
  opts = defaults(opts, {
    h: 0,
    s: 50,
    l: 50,
    hues: 6,
    steps: 4,
    padL: 20,
    swing: 0
  })

  var results = {}
  var hues = []
  var steps = []

  var h = opts.h
  var s = opts.s
  var l = opts.l

  var angle = 360 / opts.hues
  var step = (100 - opts.padL) / opts.steps
  var swing = opts.swing / 100

  for (var i = 0; i < opts.hues; i++) {
    var push = i % 2
    var offset = (push ? -1 : 1) * angle / 2 * swing
    hues.push((h + i * angle) % 360 + offset)
  }

  for (var i = 0; i < opts.steps; i++) {
    steps.push(i * step + (opts.padL))
  }

  results.base = Color().hsl(h, s, l).hexString()

  results.hues = hues.map(function (hue, i) {
    return steps.map(function (step, i) {
      return Color().hsl(hue, s, step).hexString()
    })
  })

  results.hues.forEach(function (steps) {
    var i = Math.floor(opts.steps / 2)
    var step = steps[i]
    var key = keyword(step, { basic: true })
    // To do: Resolve duplicates
    results[key] = step
  })

  results.hueValues = hues

  return results

}
