"use strict";

/**
 * Controller
 * @constructor
 */
var ParticlesModel = (module.exports = function() {
  this.init();
});

ParticlesModel.prototype = {
  init: function() {
    this.data = {
      // texture
      threshold: 0,
      smoothness: 1,
      strength: 0.32,

      // look & feel
      initialAttraction: 0,
      frictions: 0.0,
      resetStacked: false,
      stackSensibility: 0.8,

      // repulsion: false,
      // repulsionRadius: 3.0,
      // repulsionStrength: 0.0009,
      // repulsionSensibility: 0.80,

      velocityMax: 0.5,
      mapStrength: 0.0015,
      pointSize: 2,
      alpha: 0.23,
      inverted: true,
      particlesColor: "#FFFFFF",
      bgColor: "#1e1e1e"
    };

    var callback = $.proxy(this._onChange, this);
  },

  _onChange: function() {
    $(this).trigger("change");
  }
};
