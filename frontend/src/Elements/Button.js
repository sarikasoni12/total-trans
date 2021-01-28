import React from 'react';

const Button = (props) => {
  return <button className="bv-button bv-button--primary" onClick={props.onClick}>
          <span className="bv-button__text">{props.children}</span>
          <span className="bv-loading-spinner bv-button__spinner"></span>
  </button>
};

export default Button;
