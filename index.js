'use strict'

var BaseEvent = require('value-event/base-event')
var Delegator = require('dom-delegator')
var position = require('scroll-xy')
var extend = require('xtend')

module.exports = BaseEvent(handleScroll)

var delegator = Delegator()
delegator.listenTo('scroll')

function handleScroll (event, broadcast) {
  var data = extend(position(event.target), this.data)
  broadcast(data)
}
