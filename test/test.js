
var spectro = require('..')
var assert = require('assert')

var results

describe('spectroscope', function() {

  it('should should not throw', function() {
    assert.doesNotThrow(function() {
      results = spectro({
        h: 20,
        s: 100,
        l: 50,
        hues: 6,
        steps: 6,
        padL: 20
      })
      console.log(results)
    })
  })

  it('should return an object', function() {
    assert.equal(typeof results, 'object')
  })

})

