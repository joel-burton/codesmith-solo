/* eslint-disable react/prefer-stateless-function, import/extensions, class-methods-use-this, */
import React, { Component } from 'react';
import { render } from 'react-dom';

import Character from './containers/Character.jsx';

const styles = {
  main: {
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    margin: '0 1em',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://localhost:3000/user',
      userId: 1,
      characterList: [],
    };
  }

  componentDidMount() {
    const { url, userId } = this.state;
    // fetch all characters from db
    this.postData(url, { userId })
      .then((res) => {
        this.setState({
          characterList: res,
        });
      });
    // add to state
  }

  postData(url = '', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json());
  }

  render() {
    const { characterList, userId } = this.state;
    return (
      <div style={styles.main}>
        <h1 style={{ fontSize: 60 }}>
          <span role="img" aria-label="dungeons & dragons">
            🏰 & 🐉
          </span>
        </h1>
        <Character characterList={characterList} characterId={5} userId={userId} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
