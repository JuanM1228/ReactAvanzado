import PropTypes from "prop-types";

export function Button({ text }) {
  console.log(text);
  if (!text) {
    console.error("El texto es requerido");
  }
  return <button>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  text: "Default",
};
