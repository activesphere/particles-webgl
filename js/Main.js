const $ = require("./lib/zepto");
const Stage = require("./particles/Stage");
const Config = require("./Config");
const Particles = require("./particles/Particles");


class Main {
  constructor() {
    // resize
    Stage.$window.on("resize", $.proxy(this._onResize, this));
    Stage.resize();

    this._content = $("#particles");

    // particles
    this._particles = new Particles(this._content[0]);
    
    // texture
    const imgPerson = document.getElementById("img-person");
    this._particles.setTexture(imgPerson, true);
  }

  update() {
    this._particles.update();
  }

  _onResize() {
    Stage.resize();
    this._particles.resize();
  }
};

// entry point
Stage.$document.ready(function() {
  const main = new Main();
  const tick = () => {
    main.update();
    window.requestAnimationFrame(tick);
  };
  tick();
});
