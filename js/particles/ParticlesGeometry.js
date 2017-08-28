const THREE = require("./../lib/three");

class ParticlesGeometry extends THREE.BufferGeometry {
  constructor(width) {
    super(width);
    this.width = width;
    this.n = width * width;
    this.init();
  }

  init() {
    this.positions = new Float32Array(this.n * 3);
    this.uvs = new Float32Array(this.n * 2);
    for (var i = 0, l = this.n * 3; i < l; i += 3) {
      var index, entries;
      entries = 3;
  
      index = (i / entries) | 0;
  
      var u = index % this.width / this.width;
      var v = ((index / this.width) | 0) / this.width;
      var z = 0;
  
      var i3 = index * entries;
      this.positions[i3] = u;
      this.positions[i3 + 1] = v;
      this.positions[i3 + 2] = z;
    }
  
    this.addAttribute("uv", new THREE.BufferAttribute(this.uvs, 2));
    this.addAttribute("position", new THREE.BufferAttribute(this.positions, 3));
  }
}

THREE.ParticlesGeometry = ParticlesGeometry;
