 (function (name, definition, window) {
  'use strict';

  var theModule = definition(),
      hasDefine = typeof define === 'function' && define.amd,
      hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) { // AMD Module
    define(theModule);
  } else if (hasExports) { // CommonJS Module
    module.exports = theModule;
  } else { // Assign to common namespaces or simply the global object (window)
    (window.jQuery || window.$ || window)[name] = theModule;
  }
})( 'log', function () {
  var environment = "development";
  var colors = {
    success: { color: "black", bgc: "LimeGreen" },
    info:    { color: "Blue", bgc: "AliceBlue" },
    error:   { color: "Red", bgc: "#FFE0E0" },
    start:   { color: "black", bgc: "PaleGreen" },
    warning: { color: "#666600", bgc: "#FBFBD6" },
    end:     { color: "black", bgc: "MediumVioletRed" },
    default: { color: "black", bgc: "White" }
  };

  function isProduction() {
   return (environment === "production");
  }

  function parseArguments(arg, type) {
    var params = Array.prototype.slice.call(arg),
        str = "%c",
        color, options, result;

      if (type) {
        params.push(type);
      }

      color = params.splice(-1);

      if (colors[color]) {
        options = colors[color];
      } else {
        options = colors.default;
        params.push(color);
      }

    params.forEach(function (e, i) {
      if (i !== 0 ) str += " ";

      if (typeof e === "object") {
        str += "%o";
      } else if (typeof e === "number") {
        str += "%d";
      } else {
        str += "%s";
      }
    });

    result = [str, "color:" + options.color + ";background-color: " + options.bgc + ";"];
    return result.concat(params);
  }

  return {
    setEnv: function (env) {
      environment = env;
    },
    getEnv: function (env) {
      return environment;
    },
    error: function () {
      if (isProduction()) return false;

      var msg = parseArguments(arguments, "error");
      console.error.apply(console, msg);
    },
    info: function () {
      if (isProduction()) return false;

      var msg = parseArguments(arguments, "info");
      console.info.apply(console, msg);
    },
    warn: function () {
      if (isProduction()) return false;

      var msg = parseArguments(arguments, "warning");
      console.warn.apply(console, msg);
    },
    log: function () {
      if (isProduction()) return false;

      var msg = parseArguments(arguments);
      console.log.apply(console, msg);
    }
  };

}, window);
