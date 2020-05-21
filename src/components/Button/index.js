import React from 'react';
import './style.css';

export function Button(props) {
  return (
    <button {...props} className="Button">
      {props.children}
    </button>
  );
}