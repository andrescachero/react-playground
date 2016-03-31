var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
    getInitialState() {
        return {
            counter: 0
        };
    },
    clickHandler() {
        this.setState({counter: this.state.counter+1})
    },
    render() {
        return <button onClick={this.clickHandler}>{this.state.counter}</button>;
    }
});

ReactDOM.render(<Button />, document.getElementById("main"));



