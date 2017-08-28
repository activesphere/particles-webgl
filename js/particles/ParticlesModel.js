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

      velocityMax: 0.0150,
      mapStrength: 0.0500,
      pointSize: 1,
      alpha: 0.23,
      inverted: true,
      particlesColor: "#ffffff",
      bgColor: "#4c4c4c"
    };
  }
};

module.exports = ParticlesModel;
