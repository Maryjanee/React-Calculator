import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ buttonName }) => (
  <button type="button">{buttonName}</button>
);

Button.defaultProps = { buttonName: 'btn' };

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;
