import React from "react";
import styles from "styles/illustration.module.css";

const Illustration = ({ illustration }) => {
  return (
    <div className={styles.illustration}>
      <img src={illustration} alt="signup" />
    </div>
  );
};

export default Illustration;
