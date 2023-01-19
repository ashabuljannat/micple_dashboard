import React from "react";
import styles from "./Input.module.css";

const Input = ({placeholder}) => {
  return (
    <>
      <input
        type="text"
        name=""  
        id=""
        className={styles.search}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
