var chatComponent = require('./cable.component.js'),
    chatRoute = require('./cable.route.js');

module.exports = angular.module("app.chat", [
  require('actioncable'),
  chatComponent.name,
  chatRoute.name
]);
