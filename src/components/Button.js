import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick} //to make button click we set props
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

//default key value pairs
Button.defaulyProps = {
  color: "steelblue",
};

//es7.....default key value pairs...use types

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func, //onClick is a parameter which takes in a function.
};

export default Button;
