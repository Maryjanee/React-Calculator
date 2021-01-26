import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ result }) => (
  <div className="display-container">
    <p className="display-value">{result ? String(result) : null}</p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = { result: '120000' };

export default Display;
