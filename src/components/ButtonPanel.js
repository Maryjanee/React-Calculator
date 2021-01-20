import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const Panel = ({ onClick, symbols }) => symbols.map((symbol, index) => (
  <Button
    key={(symbol + index).toString()}
    buttonName={symbol}
    onClick={onClick}
  />
));

const ButtonPanel = ({ onClick }) => (
  <div className="btn-panel">
    <div className="btn-group">
      <Panel onClick={onClick} symbols={['AC', '+/-', '%', '÷']} />
    </div>
    <div className="btn-group">
      <Panel onClick={onClick} symbols={['7', '8', '9', '*']} />
    </div>
    <div className="btn-group">
      <Panel onClick={onClick} symbols={['4', '5', '6', '-']} />
    </div>
    <div className="btn-group">
      <Panel onClick={onClick} symbols={['1', '2', '3', '+']} />
    </div>
    <div className="btn-group last">
      <Panel onClick={onClick} symbols={['0', '.', '=']} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  onClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  onClick: null,
};

export default ButtonPanel;
