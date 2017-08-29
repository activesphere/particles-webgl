class ParticlesModel {
  constructor() {
    this.data = {
      // texture
      threshold: 0,
      smoothness: 2,
      strength: 0.35,

      // look & feel
      initialAttraction: 0,
      frictions: 0,
      resetStacked: false,
      stackSensibility: 0.8,

      // repulsion
      repulsion: true,
      repulsionRadius: 0.25,
      repulsionStrength: 0.0050,
      repulsionSensibility: 0.8,

      velocityMax: 0.0075,
      mapStrength: 0.0195,
      pointSize: 1,
      alpha: 0.23,
      inverted: true,
      particlesColor: "#ffffff",
      bgColor: "#4c4c4c"
    };
  }
};

module.exports = ParticlesModel;
