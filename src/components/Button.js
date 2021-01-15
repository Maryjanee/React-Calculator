import PropTypes from 'prop-types';

const Button = ({buttonName}) =>{
  return(
    <button type="button">{buttonName}</button>
  )
}

Button.defaultProps = { buttonName: 'btn' };

Button.propTypes = {
  buttonName: PropTypes.string,
};




export default Button