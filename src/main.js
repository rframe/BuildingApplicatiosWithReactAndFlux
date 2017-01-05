/**
 * Created by rframe on 12/30/2016.
 */
"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializatActions = require('./actions/initializeActions');

InitializatActions.initApp();

Router.run(routes, function(Handler) {
//Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});

