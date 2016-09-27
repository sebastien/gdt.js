(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', './../Core/Mesh', 'gl-matrix'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, require('./../Core/Mesh'), require('gl-matrix'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, global.Mesh, global.glMatrix);
    global.Duplicate = mod.exports;
  }
})(this, function (module, _Mesh, _glMatrix) {
  'use strict';

  var Mesh = _interopRequireWildcard(_Mesh);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  module.exports = function (mesh) {
    var newMesh = new Mesh();
    var newPositions = [];
    var positions = mesh.getPositions();
    var plen = positions.length;
    for (var i = 0; i < plen; i++) {
      newPositions.push(_glMatrix.vec3.clone(positions[i]));
    }
    newMesh.setPositions(newPositions);
    newMesh.setCells(mesh.getCells());
    newMesh.process();
    return newMesh;
  };
});

