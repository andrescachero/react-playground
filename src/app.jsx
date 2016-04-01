var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    getInitialState() {
        return {};
    },
    componentDidMount() {
        var component = this;
        $.get('https://api.github.com/users/' + component.props.username, function (data) {
            component.setState(data);
        });
    },
    render() {
        return (
            <div>
                <img src={this.state.avatar_url} width="80" />
                <h3>{this.state.name}</h3>
                <hr />
            </div>
        );
    }
});

var Form = React.createClass({
    addUsername(event) {
        event.preventDefault();
        username = ReactDOM.findDOMNode(this.refs.username);
        this.props.addUsername(username.value);
        username.value = '';
    },
    render() {
        return (
            <form onSubmit={this.addUsername} >
                <input placeholder="github username" ref="username" />
                <input type="submit" text="Add" />
            </form>
        );
    }
});

var Main = React.createClass({
    getInitialState() {
        return {
            usernames: []
        };
    },
    addUsername(username) {
        this.setState({username: this.state.usernames.push(username)});
    },
    render() {
        var cards = this.state.usernames.map(function (username) {
            return (<Card key={username} username={username} />);
        });
        return (
            <div>
                <Form addUsername={this.addUsername} />
                {cards}
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById("main"));



