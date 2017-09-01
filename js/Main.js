const $ = require("./lib/zepto");
const Stage = require("./particles/Stage");
const Config = require("./Config");
const Particles = require("./particles/Particles");


class Main {
  constructor(name) {
    // resize
    Stage.$window.on("resize", $.proxy(this._onResize, this));
    Stage.resize();

    this._content = $("#particles-" + name);

    // particles
    this._particles = new Particles(this._content[0], name);
    
    // texture
    const src = name == 'logo' ? name + '.png' : name + '.jpg';
    console.log(src);
    const imgPerson = $(`<img src="${src}" />`)[0];
    this.setTextureImage(imgPerson);
  }

  setTextureImage(imgElem) {
    this._particles.setTexture(imgElem, true);
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
  const names = ['logo', 'ciju', 'anantha', 'dinesh', 'naman', 
    'rohit', 'sreenu', 'rahul']

  const tick = (module) => {
    module.update();
    const fn = tick.bind(null, module);
    window.requestAnimationFrame(fn);
  };

  const modules = {};
  names.forEach((name) => {
    modules[name] = new Main(name);
    tick(modules[name]);
  });
});
