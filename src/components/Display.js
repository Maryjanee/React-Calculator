import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display-container">
    <p className="display-value">{result}</p>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = { result: '0' };

export default Display;
