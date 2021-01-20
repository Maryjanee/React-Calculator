import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ buttonName, onClick }) => (
  <button type="button" onClick={() => onClick(buttonName)}>
    {buttonName}
  </button>
);

Button.defaultProps = {
  buttonName: 'btn',
  onClick: null,
};

Button.propTypes = {
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
