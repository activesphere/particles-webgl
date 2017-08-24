"use strict";

var $ = require("./../lib/zepto/zepto");
var RequestAnimationFrame = require("./../lib/anonymous/utils/RequestAnimationFrame");
var Stage = require("./../lib/anonymous/core/Stage");
var Easing = require("./../lib/zepto/Easing");

/**
 * AModule abstract class
 * @constructor
 */
var AModule = (module.exports = function() {});

AModule.prototype = {
  init: function() {
    // resize
    Stage.$window.on("resize", $.proxy(this._onResize, this));
    Stage.resize();
  },

  /**
     * Drawing on requestAnimationFrame
     */
  update: function() {},

  /**
     * Triggered on window resize
     */
  _onResize: function() {
    Stage.resize();
  }
};
