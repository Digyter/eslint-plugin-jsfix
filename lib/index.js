/**
 * @fileoverview Javascript linter with autofix for .js files
 * @author digyter
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const jsprocessor = require('./processors/jsProcessor')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import processors
module.exports.processors = {
  '.js': jsprocessor
};