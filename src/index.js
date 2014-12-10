"use strict";

var path = require( "path" )
  , config = require( "./config" )
  , emberNames = [
  "ember.canary.js",
  "ember.release.js",
  "ember.beta.js",
  "ember.js",
  "ember.min.js",
  "ember.prod.js"
];

var _tweakEmber = function( mimosaConfig, options, next ) {
  if ( options.files && options.files.length ) {
    options.files.forEach( function( file ) {
      if ( emberNames.indexOf( path.basename( file.inputFileName ) ) !== -1 ) {
        file.inputFileText = "window.EmberENV = " +
          JSON.stringify(mimosaConfig.emberEnv.env, null, 2) +
          ";\n\n" +
          file.inputFileText;
      }
    });
  }
  next();
};

var registration = function( mimosaConfig, register ) {
  register( ["add","update","buildFile"], "afterRead", _tweakEmber, ["js"] );
};

module.exports = {
  registration: registration,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};
