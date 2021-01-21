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
      const { total, next, operation } = this.state;
      this.setState(calculate({ total, next, operation }, buttonName));
    };
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <Display result={next || total || 0} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
