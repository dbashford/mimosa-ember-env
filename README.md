mimosa-ember-env
===========
## Overview

This module will wrap instances of the ember.js library in a function within which `EmberENV` will be declared.  This saves you from needing to possibly duplicate EmberENV
declarations between dev/test environments.  

For more information regarding Mimosa, see http://mimosa.io.

## Usage

Add `'ember-env'` to your list of modules. Mimosa will install the module for you when you start up.

## Functionality

This adjusts your `ember.js`, tweaking it so `var EmberENV` is included prior to Ember being evaluated.

## Default Config

```
emberEnv: {
  env:{}
}
```
* `env`, an object, your [EmberENV](http://emberjs.com/guides/configuring-ember/feature-flags/) object.

## Example Config
```
emberEnv: {
  env:{
    FEATURES: {
      'ember-htmlbars': true,
      'ember-htmlbars-block-params': true
    }
  }
}
```


