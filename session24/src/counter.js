import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
      hasError: false,
    };
    this.divRef = React.createRef();
  }

  // Called right before rendering, both on the initial mount and on subsequent updates.
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    // Return null if no state needs to be updated.
    return null;
  }

  // Called immediately after a component is mounted. Good for network requests.
  componentDidMount() {
    console.log('componentDidMount');
  }

  // Called to determine whether the component should update.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    // Return true if the component should update.
    return true;
  }

  // Called right before the most recently rendered output is committed to the DOM.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    // Capture the scroll position.
    return this.divRef.current ? this.divRef.current.scrollHeight : null;
  }

  // Called immediately after updating occurs.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    // Use the snapshot to restore the scroll position.
    if (snapshot !== null && this.divRef.current) {
      this.divRef.current.scrollTop = this.divRef.current.scrollHeight - snapshot;
    }
  }

  // Called immediately before a component is destroyed. Good for cleanup.
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // Called when a descendant component throws an error.
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError');
    // Update state to display fallback UI.
    return { hasError: true };
  }

  // Called after an error has been thrown by a descendant component.
  componentDidCatch(error, info) {
    console.log('componentDidCatch');
    // Log error information.
    console.error('Error caught in componentDidCatch:', error, info);
  }

  render() {
    console.log('render');

    if (this.state.hasError) {
      // Fallback UI if there is an error.
      return <h1>Something went wrong.</h1>;
    }

    return (
      <div ref={this.divRef}>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
