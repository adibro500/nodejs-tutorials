import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {msg: 'Hello World!'}
    }

     changeState = () => {
        this.setState({msg: 'hi'});
    }

    render() {
        return (<div>
            <h1>
                {this.state.msg}
                <button onClick={this.changeState}>Click me!</button>
                </h1>
                <h1>{this.props.name}</h1>
            </div>);
    }
}

export default Child;