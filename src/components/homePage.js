/**
 * Created by rframe on 12/30/2016.
 */
"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router, and Flux for ultra responsive web apps.</p>
            </div>
        );
    }
});

module.exports = Home;