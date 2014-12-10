"use strict";

exports.defaults = function() {
  return {
    emberEnv: {
      env: {}
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
  "  emberEnv:\n" +
  "    env: {}     # EmberENV declaration\n";
};

exports.validate = function(config, validators) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "emberEnv config", config.emberEnv ) ) {
    validators.ifExistsIsObject( errors, "emberEnv.env", config.emberEnv.env );
  }

  return errors;
};
