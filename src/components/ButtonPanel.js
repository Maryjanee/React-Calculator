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

const ButtonPanel = props => {
  const handleClick = buttonName => {
    props.onClick(buttonName);
  };

  return (
    <div className="btn-panel">
      <div className="btn-group">
        <Panel onClick={handleClick} symbols={['AC', '+/-', '%', '÷']} />
      </div>
      <div className="btn-group">
        <Panel onClick={handleClick} symbols={['7', '8', '9', '*']} />
      </div>
      <div className="btn-group">
        <Panel onClick={handleClick} symbols={['4', '5', '6', '-']} />
      </div>
      <div className="btn-group">
        <Panel onClick={handleClick} symbols={['1', '2', '3', '+']} />
      </div>
      <div className="btn-group last">
        <Panel onClick={handleClick} symbols={['0', '.', '=']} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  onClick: null,
};

export default ButtonPanel;
