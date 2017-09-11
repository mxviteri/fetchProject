'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
  // Perhaps fetch some data here
  }

  render() {
    return (
      <h1>Sample Blog</h1>
      // Your code here
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
