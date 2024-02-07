import React from 'react';

const Create = () => {
  const buttonStyle = {
    backgroundColor: '#4CAF50', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s',
  };

  return <button style={buttonStyle}>Create</button>;
};

export default Create;
