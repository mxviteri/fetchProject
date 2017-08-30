'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Address Book / Country Codes</h1>
      // Your code here
    );
  }
}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
