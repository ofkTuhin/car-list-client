import React from "react";
import badge from "assets/images/success.png";
import styles from "styles/summary.module.css";
const Summury = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p className={styles.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={styles.badge}>
        <img src={badge} alt="Success" />
      </div>
    </div>
  );
};

export default Summury;
