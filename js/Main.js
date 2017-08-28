"use strict";

var $ = require("./lib/zepto/zepto");
var Stage = require("./particles/Stage");
var Config = require("./Config");
var Particles = require("./particles/Particles");

/**
 * Main
 * @constructor
 */
var Main = function() {
  this.init();
};

Main.prototype = $.extend({}, AModule.prototype, {
  init: function() {
    // resize
    Stage.$window.on("resize", $.proxy(this._onResize, this));
    Stage.resize();

    this._content = $("#particles");

    // particles
    this._particles = new Particles(this._content[0]);
    
    // texture
    const imgPerson = document.getElementById("img-person");
    this._particles.setTexture(imgPerson, true);
  },

  /**
	 * Drawing on requestAnimationFrame
	 */
  update: function() {
    this._particles.update();

    AModule.prototype.update.call(this);
  },

  /**
	 * Triggered on window resize
	 */
  _onResize: function() {
    Stage.resize();    
    this._particles.resize();
  }
});

/**
 * Let's roll
 */
Stage.$document.ready(function() {
  var main = new Main();

  (function tick() {
    main.update();
    window.requestAnimationFrame(tick);
  })();
});
