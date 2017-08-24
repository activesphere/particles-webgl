**Particles**
===================

This is a WebGL + [ThreeJS](https://threejs.org/) based module for animating particles over a texture. The input is a simple image which is converted into a texture and used as a basis for the attraction forces of the particles.

This project is based and inspired from Léo Chéron's experiment - [GPGPU particles](https://github.com/mrgnou/lab/tree/master/src/webgl-gpgpu-particles).


Usage
--------

 1. Install all dependencies: `npm install`
 2. Run: `node browserify.js`.

> **Note on module loading:**

> This project uses [Browserify](http://browserify.org/) to load the scripts.
> Running `node browserify.js` will start Browserify which will build once and watch for changes to the script files. You can find the bundle file built by Browserify created as `js/bundle.js`.
