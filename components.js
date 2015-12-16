"use strict";

var ReactViewMain = React.createClass({
    displayName: "ReactViewMain",

    render: function render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
});