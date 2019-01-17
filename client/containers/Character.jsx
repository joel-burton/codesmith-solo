/*
  eslint-disable
  import/extensions,
  react/no-unused-state,
  class-methods-use-this,
  react/prop-types,
  react/button-has-type,
*/
import React, { Component } from 'react';

import Input from '../components/Input.jsx';
import TextAreaInput from '../components/TextAreaInput.jsx';


const styles = {
  wrapper: {
    // border: '1px solid green',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridGap: '1em',
    width: '100%',
    height: 'auto',
    justifyItems: 'center',
  },
  title: {
    gridColumn: '1 / span 2',
    // border: '1px solid green',
  },
  header: {
    gridColumn: '1 / span 2',
    // border: '1px solid yellow',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  headerRow: {
    width: '100%',
    // border: '1px solid lightblue',
    display: 'flex',
    justifyItems: 'space-between',
  },
  left: {
    // border: '1px solid red',
  },
  right: {
    // border: '1px solid red',
    display: 'grid',
    gridTemplateRows: '2fr 1fr',
    width: '95%',

  },
  button: {
    border: 'none',
  },
};


class Character extends Component {
  constructor(props) {
    super(props);
    const { userId, characterId } = this.props;
    this.state = {
      uri: 'http://localhost:3000/character',
      userId,
      characterId,
      name: '',
      race: '',
      level: 1,
      playerClass: '',
      con: 0,
      str: 0,
      dex: 0,
      wis: 0,
      int: 0,
      cha: 0,
      notes: '',
      inventory: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.postData = this.postData.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
  }


  componentDidMount() {
    // load up a character
    const { uri } = this.state;
    const { characterId } = this.props;
    console.log('character sheet mounted');
    this.postData(uri, { characterId })
      .then((res) => {
        console.log(res);
        this.setState({
          userId: res.user_id,
          characterId: res._id,
          name: res.name,
          level: res.level,
          race: res.race,
          playerClass: res.class,
          con: res.con,
          str: res.str,
          dex: res.dex,
          wis: res.wis,
          int: res.int,
          cha: res.cha,
          notes: res.notes,
          inventory: res.inventory,
        });
      });
    // store in state
  }

  getCharacter(e) {
    const { uri } = this.state;
    const characterId = e.target.id;
    console.log('target id:', e.target);
    this.postData(uri, { characterId })
      .then((res) => {
        console.log('got new character!');
        console.log(res);
        this.setState({
          userId: res.user_id,
          characterId: res._id,
          name: res.name,
          level: res.level,
          race: res.race,
          playerClass: res.class,
          con: res.con,
          str: res.str,
          dex: res.dex,
          wis: res.wis,
          int: res.int,
          cha: res.cha,
          notes: res.notes,
          inventory: res.inventory,
        });
      });
  }

  postData(url = '', data = {}) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json());
  }

  handleInput(e) {
    console.log(e.target.id);
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }


  render() {
    const {
      name, race, level, playerClass, con, str, dex, wis, int, cha, notes, inventory,
    } = this.state;
    const characters = [];
    const { characterList } = this.props;
    characterList.forEach((char) => {
      const item = (
        <button key={char._id} id={char._id} onClick={this.getCharacter} style={styles.button}>
          <h4 id={char._id}>
            {char.name}
            {' '}
            – Level
            {' '}
            {char.level}
            {' '}
            {char.race}
            {' '}
            {char.playerClass}
          </h4>
        </button>
      );
      characters.push(item);
    });

    return (
      <div style={styles.wrapper}>
        <div style={styles.header}>
          {characters}
        </div>
        <div style={styles.header}>
          <div style={styles.headerRow}>
            <Input handleInput={this.handleInput} id="name" value={name} label="Name" />
          </div>
          <div style={styles.headerRow}>
            <Input handleInput={this.handleInput} id="level" value={level} label="Level" />
            <Input handleInput={this.handleInput} id="race" value={race} label="Race" />
            <Input handleInput={this.handleInput} id="class" value={playerClass} label="Class" />
          </div>
        </div>
        <div style={styles.left}>
          <Input handleInput={this.handleInput} id="con" value={con} label="CON" />
          <Input handleInput={this.handleInput} id="str" value={str} label="STR" />
          <Input handleInput={this.handleInput} id="dex" value={dex} label="DEX" />
          <Input handleInput={this.handleInput} id="wis" value={wis} label="WIS" />
          <Input handleInput={this.handleInput} id="int" value={int} label="INT" />
          <Input handleInput={this.handleInput} id="cha" value={cha} label="CHA" />
        </div>
        <div style={styles.right}>
          <TextAreaInput handleInput={this.handleInput} id="notes" value={notes} label="Notes" />
          <TextAreaInput handleInput={this.handleInput} id="inventory" value={inventory} label="Inventory" />
        </div>

      </div>
    );
  }
}

export default Character;
