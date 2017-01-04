/**
 * Created by rframe on 12/30/2016.
 */
"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            if(!confirm('are you sure you want to read a page that\'s this boring?')) {
                transition.abort();
            } else {
                callback();
            }
        },
        willTransitionFrom: function(transition, component) {
            if(!confirm('are you sure you want to leave a page that\'s this exciting?')) {
                transition.abort();
            }
        }
    },
    render: function() {
        return (
            <div>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Broswerify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
