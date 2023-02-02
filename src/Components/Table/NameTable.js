import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./NameTable.module.css";

const NameTable = ({ user, index }) => {
  return (
    <> 
       <table key={user.email}> 
       <tbody>   
        <tr>
          <td className={styles.tTitleN}>Name</td>
          <td className={styles.tTitle}>User Id</td>
          <td className={styles.tTitle}>Birth</td>
          <td className={styles.tTitle}>Gender</td>
          <td className={styles.tTitle}>Post Code</td>
          <td className={styles.tTitle}>IP</td>
          <td className={styles.tTitle}>Email</td>
          <td className={styles.tTitle}>Phone</td>
          <td className={styles.tTitle}>Status</td>
          <td className={styles.tTitle}>Action</td>
        </tr> 
        {user && user?.map((user, index) => ( 
          <>
            <tr key={index}>
              <td className={styles.tData}>{user?.name}</td>
              <td className={styles.tData}>{user?.key_id}</td>
              <td className={styles.tData}>{user?.birth}</td>
              <td className={styles.tData}>{user?.gender}</td>
              <td className={styles.tData}>{user?.postcode}</td>
              <td className={styles.tData}>{user?.postcode}</td>
              <td className={styles.tData}>{user?.email}</td>
              <td className={styles.tData}>{user?.phone}</td>
              <td className={styles.tData}>{user?.status}</td>
              <td className={styles.tDataAction}><ActionButton/></td>
            </tr>
          </>
        ))}
        </tbody>
      </table>
    
    </>
  )
}

export default NameTable;