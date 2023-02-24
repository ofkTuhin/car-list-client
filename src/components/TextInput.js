import React from "react";
import styles from "styles/textinput.module.css";

const TextInput = ({ icon, ...rest }) => {
  return (
    <div className={styles.textInput}>
      <input {...rest} />
      <span className="material-symbols-outlined"> {icon}</span>
    </div>
  );
};

export default TextInput;
