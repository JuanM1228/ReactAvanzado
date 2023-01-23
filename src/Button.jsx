import PropTypes from "prop-types";

export function Button({ text }) {
  const GreetingButton = () => {
    console.log("Hola mundo en consola");
  };

  if (!text) {
    console.error("El texto es requerido");
  }
  return <button onClick={GreetingButton}>{text}</button>;
}

/* Se coloca para requerir un argunmento */
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

/* Se coloca para colocar props default */

Button.defaultProps = {
  text: "Default",
};
