'use strict'

var test = require('tape')
var h = require('virtual-dom/h')
var thermometer = require('thermometer')
var dispatchEvent = require('dispatch-event')
var scrollEvent = require('./')

test(function (t) {
  t.plan(1)

  var render = thermometer.createComponent(Component)
  render({onScroll: onScroll}, function (state, element, done) {
    element.scrollLeft = 10
    element.scrollTop = 20
    dispatchEvent(element, 'scroll')
    done()
  })

  function onScroll (data) {
    t.deepEqual(data, {
      x: 10,
      y: 20,
      foo: 'bar'
    })
  }
})

function Component (data) {
  return function () {
    return data
  }
}
Component.render = function render (state) {
  return h('div', {
    'ev-scroll': scrollEvent(state.onScroll, {
      foo: 'bar'
    })
  })
}
