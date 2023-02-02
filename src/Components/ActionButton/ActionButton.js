import React from "react";
import styles from "./ActionButton.module.css";


const doAction = (ac) => {
    console.log(ac);
    
};

const ActionButton = () => {
    const actions = ["review", "approved", "verified", "rejected", "banned"];
  return (
    <div className={styles.box}>
      <select
        onChange={(e) => {
          doAction(e.target.value);
        }}
      >
        {/* <option>{status}</option> */}
        <option>Do Action</option>
        {actions.map((action,index) => (
          <option value={action} key={index}>{action}
            {/* <button onClick={() => doAction(action)}></button> */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ActionButton;
