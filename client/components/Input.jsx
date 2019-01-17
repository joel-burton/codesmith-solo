/* eslint-disable react/prop-types */
import React from 'react';

const styles = {
  input: {
    border: 'none',
    fontSize: 24,
    textAlign: 'center',
    display: 'flex',
    flex: 1,
    width: '98%',
    focus: 'none',
    // borderBottom: '2px solid lightgray',
  },
  label: {
    margin: '0.6em 0em',
    fontSize: 16,
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
};

const Input = ({
  label, id, value, handleInput,
}) => (
  <label htmlFor="input" style={styles.label}>
    <input
      id={id}
      name="input"
      type="text"
      value={value}
      placeholder="I'm an input"
      style={styles.input}
      onChange={handleInput}
    />
    { label }
  </label>
);

export default Input;
