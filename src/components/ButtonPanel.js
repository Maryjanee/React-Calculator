import Button from './Button';

const ButtonPanel = () => (
  <div className="btn-panel">
    <div className="btn-group">
      {['AC', '+/-', '%', '÷'].map(((btnVal, index) => <Button key={(btnVal + index).toString()} buttonName={btnVal} />))}
    </div>
    <div className="btn-group">
      {['7', '8', '9', '*'].map(((btnVal, index) => <Button key={(btnVal + index).toString()} buttonName={btnVal} />))}
    </div>
    <div className="btn-group">
      {['4', '5', '6', '-'].map(((btnVal, index) => <Button key={(btnVal + index).toString()} buttonName={btnVal} />))}
    </div>
    <div className="btn-group">
      {['1', '2', '3', '+'].map(((btnVal, index) => <Button key={(btnVal + index).toString()} buttonName={btnVal} />))}
    </div>
    <div className="btn-group">
      {['0', '.', '='].map(((btnVal, index) => <Button key={(btnVal + index).toString()} buttonName={btnVal} />))}
    </div>
  </div>
);

export default ButtonPanel;
