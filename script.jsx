'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount () {
    fetch('https://itunes.apple.com/search?term=ramones&limit=15entity=song').then((response) => {
      response.json().then(({results: items}) => {
        this.setState({
          items
        });
      });
    });
  }
  filter (e) {
    this.setState({filter: e.target.value})
  }


  render () {
    let items = this.state.items;

    return(
      <div>
        <h1 className="title">The Ramones</h1>
        <h2 className="title">Album Blog</h2>

        {items.map((item, i) =>
          <article key={i}>
            <header><h2>Album: {item.collectionName}</h2></header>
            <section>Track: {item.trackName}</section>
            <section>Genre: {item.primaryGenreName}</section>
            <section>Media Type: {item.kind}</section>
            <section>Artist ID: {item.artistId}</section>
            <section>Collection ID: {item.collectionId}</section>
            <footer></footer>
            <a className="btn btn-primary" href={item.artistViewUrl} role="button" target="blank">Read About The Artist</a>
            <a className="btn btn-success" href={item.previewUrl} role="button" target="blank">Listen Here</a>
          </article>
        )}</div>
    )
  }

}

ReactDOM.render(<Fetch />, document.getElementById('fetch'));
