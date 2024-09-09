// Dialog.js

import React from 'react';

const Dialog = ({ isOpen, onClose, onLearn, onCompile }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog">
      <div className="dialog-content">
        <h2>Choose an Option</h2>
        <button onClick={onLearn}>Learn</button>
        <button onClick={onCompile}>Compile</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Dialog;
