'use strict';

const React = require('react');
const ReactrOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    }
  }

  componentWillMount() {
    fetch('http://services.groupkt.com/country/get/all').then((response) => {
      response.json().then((data) => {
        this.setState({countries: data.RestResponse.result});
      });
    });
  }

  render() {
    const lis = [];
    this.state.countries.forEach((country, i) => {
      lis.push(<tr key={i}>
        <td>Country: {country.name}</td>
        <td>Alpha Code 2: {country.alpha2_code}</td>
      </tr>);
    });

    return (
      <div>
        <h1>Address Book / Country Codes</h1>
        <table>
          {lis}
        </table>
      </div>
    );
  }
}

ReactrOM.render(
  <Fetch/>, document.getElementById('fetch'));
