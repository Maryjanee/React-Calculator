/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';

// It should accept the result of the calculation as an incoming prop.
// The result prop should be a String.
// The default value of the result prop should be 0.

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
