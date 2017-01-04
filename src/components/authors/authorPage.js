/**
 * Created by rframe on 12/30/2016.
 */
"use strict";

var React = require('react');

var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var AuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authors: []
        };
    },
    componentWillMount: function() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    },
    componentDidMount: function() {
        if((this.isMounted())) {
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
    },
    render: function() {
        return (
            <div>
                <h1>Authors</h1>

                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;
