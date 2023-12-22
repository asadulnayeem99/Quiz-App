/* eslint-disable react/prop-types */
import classes from "../styles/Form.module.css";

const Form = ({ children, className, ...rest }) => {
  return (
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
      {children}
    </form>
  );
};

export default Form;
