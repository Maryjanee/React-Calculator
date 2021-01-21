import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ buttonName, onClick }) => {
  const handleClick = () => {
    onClick(buttonName);
  };

  return (
    <button type="button" onClick={handleClick}>
      {buttonName}
    </button>
  );
};

Button.defaultProps = {
  buttonName: 'btn',
  onClick: null,
};

Button.propTypes = {
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
