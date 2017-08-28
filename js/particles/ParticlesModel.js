class ParticlesModel {
  constructor() {
    this.data = {
      // texture
      threshold: 0,
      smoothness: 2,
      strength: 0.35,

      // look & feel
      initialAttraction: 0,
      frictions: 0.0,
      resetStacked: true,
      stackSensibility: 0.8,

      // repulsion: true,
      // repulsionRadius: 0.5,
      // repulsionStrength: 0.0005,
      // repulsionSensibility: 0.8,

      velocityMax: 0.0015,
      mapStrength: 0.0500,
      pointSize: 2,
      alpha: 0.25,
      inverted: false,
      particlesColor: "#ffffff",
      bgColor: "#4c4c4c"
    };
  }
};

module.exports = ParticlesModel;
