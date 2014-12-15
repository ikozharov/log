AMD/CommonJS/Global logging module
===

Small module for logging in browser.

 
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
 
