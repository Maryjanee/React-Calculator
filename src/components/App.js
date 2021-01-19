import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../styles/App.css';

const App = () => (
  <div className="calculator">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
