import React from "react";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./DataTable.module.css";

const DataTable = ({ user, index }) => {
  return (
    <> 
       <table key={user.email}> 
       <tbody>   
        <tr>
          <td className={styles.dtTitleN}>Name</td>
          <td className={styles.dtTitle}>User Id</td>
          <td className={styles.dtTitle}>Birth</td>
          <td className={styles.dtTitle}>Gender</td>
          <td className={styles.dtTitle}>Post Code</td>
          <td className={styles.dtTitle}>IP</td>
          <td className={styles.dtTitle}>Email</td>
          <td className={styles.dtTitle}>Phone</td>
          <td className={styles.dtTitle}>Status</td>
          <td className={styles.dtTitle}>Action</td>
        </tr> 
        {user && user?.map((user, index) => ( 
          <>
            <tr key={index}>
              <td className={styles.dtData}>{user?.name}</td>
              <td className={styles.dtData}>{user?.key_id}</td>
              <td className={styles.dtData}>{user?.birth}</td>
              <td className={styles.dtData}>{user?.gender}</td>
              <td className={styles.dtData}>{user?.postcode}</td>
              <td className={styles.dtData}>{user?.postcode}</td>
              <td className={styles.dtData}>{user?.email}</td>
              <td className={styles.dtData}>{user?.phone}</td>
              <td className={styles.dtData}>{user?.status}</td>
              <td className={styles.dtDataAction}><ActionButton/></td>
            </tr>
          </>
        ))}
        </tbody>
      </table>
    
    </>
  )
}

export default DataTable;