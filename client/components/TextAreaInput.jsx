/* eslint-disable react/prop-types */
import React from 'react';

const styles = {
  input: {
    border: 'none',
    fontSize: 16,
    textAlign: 'center',
    display: 'flex',
    flex: 1,
    width: '96%',
    focus: 'none',

  },
  label: {
    // border: '1px solid lightblue',
    margin: '0.6em 0em',
    fontSize: 18,
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    alignItems: 'center',
  },
};

const TextAreaInput = ({
  label, id, value, handleInput,
}) => (
  <label htmlFor="input" style={styles.label}>
    {label}
    <textarea
      id={id}
      name="input"
      type="text"
      value={value}
      placeholder="I'm an input"
      style={styles.input}
      onChange={handleInput}
    />
  </label>
);

export default TextAreaInput;
