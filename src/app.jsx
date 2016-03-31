var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
    clickHandler() {
        this.props.localClickHandler(this.props.increment)
    },
    render() {
        return <button onClick={this.clickHandler}>+{this.props.increment}</button>;
    }
});

var Result = React.createClass({
    render() {
        return <div>{this.props.localCounter}</div>;
    }
});

var Main = React.createClass({
    getInitialState() {
        return {
            counter: 0
        };
    },
    clickHandler(increment) {
        this.setState({counter: this.state.counter + increment})
    },
    render() {
        return (
            <div>
                <Button localClickHandler={this.clickHandler} increment={1} />
                <Button localClickHandler={this.clickHandler} increment={5} />
                <Button localClickHandler={this.clickHandler} increment={10} />
                <Button localClickHandler={this.clickHandler} increment={100} />
                <Result localCounter={this.state.counter} />
            </div>
        );
    }
})
ReactDOM.render(<Main />, document.getElementById("main"));



