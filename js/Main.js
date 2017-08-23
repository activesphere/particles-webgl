"use strict";


var Config = require("./Config");
var Particles = require("./particles/Particles");
var AModule = require("./modules/AModule");

/**
 * Main
 * @constructor
 */
var Main = function() {
  AModule.apply(this);

  this.init();
};

Main.prototype = $.extend({}, AModule.prototype, {
  init: function() {
    AModule.prototype.init.call(this);

    //
    this._content = $("#particles");

    // particles
    this._particles = new Particles(this._content[0]);
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
    AModule.prototype._onResize.call(this);

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
