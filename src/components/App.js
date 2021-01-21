/* eslint-disable no-sequences */
import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../styles/App.css';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    const { total, next, operation } = state;
    setState(calculate({ total, next, operation }, buttonName));
  };

  const { total, next } = state;
  return (
    <div className="calculator">
      <Display result={next || total || 0} />
      <ButtonPanel onClick={handleClick} />
    </div>
  );
};

export default App;
