/* eslint-disable no-sequences */
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../styles/App.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = buttonName => {
      this.setState(prevState => ({ ...calculate(prevState, buttonName) }));
    };
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <Display result={total, next, operation} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
