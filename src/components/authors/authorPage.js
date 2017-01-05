/**
 * Created by rframe on 12/30/2016.
 */
"use strict";

var React = require('react');

var Router = require('react-router');
var Link = require('react-router').Link;
//var AuthorApi = require('../../api/authorApi');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');
var AuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnMount: function () {
        AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({authors: AuthorStore.getAllAuthors()});
    },
    render: function() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;
