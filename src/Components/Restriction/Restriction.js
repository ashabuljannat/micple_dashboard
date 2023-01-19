import React from "react";
import styles from "./Restriction.module.css";

function Restriction() {
  return (
    <>
      <h3> Restriction</h3>
      <div className={styles.sub}>
        <input type="text" name="" id="" placeholder="Enter Keyword/Url"/>
        <button>Submit</button>
      </div>

      <div className={styles.main}>
        <div className={styles.key}>
          <span>Total Keywords: 2</span>
          <div className={styles.form}>
            <input type="text" name="" id="" />
            <button>Search</button>
            <button>Delate</button>
          </div>
          
        </div>
        <input type="text" name="" id="" />
          <input type="text" name="" id="" />
      </div>
    </>
  );
}

export default Restriction;
