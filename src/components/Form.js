import React from "react";
import styles from "styles/form.module.css";

const Form = ({ className, children, ...rest }) => {
  return (
    <form className={`${className} ${styles.form}`} {...rest}>
      {children}
    </form>
  );
};

export default Form;
