Small module for logging in browser [![Stories in Ready](https://badge.waffle.io/ikozharov/log.svg?label=ready&title=Ready)](http://waffle.io/ikozharov/log)
===

AMD/CommonJS/Global module.

 
[See in action](http://ikozharov.github.io/log)

## Usage

You can inline script tag, then the module will be available as *window.log* or *jQuery.log*
~~~javascript
log.info("Hello, world!");
~~~

or

You can use RequireJS
~~~javascript
define(["log"], function (log) {
  log.info("Hello, world!");
});
~~~

or

You can use Browserify
~~~javascript
var log = require('log');
log.info("Hello, world!");
~~~
 
