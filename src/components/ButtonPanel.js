import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = props => (
  <div className="btn-panel">
    <div className="btn-group">
      {['AC', '+/-', '%', '÷'].map(((btnVal, index) => <Button key={(btnVal + index).toString()} buttonName={btnVal} onClick={props.onClick} />))}
    </div>
    <div className="btn-group">
      {['7', '8', '9', '*'].map(((btnVal, index) => <Button key={(btnVal + index).toString()} buttonName={btnVal} onClick={props.onClick} />))}
    </div>
    <div className="btn-group">
      {['4', '5', '6', '-'].map(((btnVal, index) => <Button key={(btnVal + index).toString()} buttonName={btnVal} onClick={props.onClick} />))}
    </div>
    <div className="btn-group">
      {['1', '2', '3', '+'].map(((btnVal, index) => <Button key={(btnVal + index).toString()} buttonName={btnVal} onClick={props.onClick} />))}
    </div>
    <div className="btn-group last">
      {['0', '.', '='].map(((btnVal, index) => <Button key={(btnVal + index).toString()} buttonName={btnVal} onClick={props.onClick} />))}
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
