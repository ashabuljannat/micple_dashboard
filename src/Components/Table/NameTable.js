import React from "react";
import styles from "./NameTable.module.css";

const NameTable = ({ data, index }) => {
  // console.log(data)
  return (
    <>
       <table key={index}> 
       <tbody> 
        <tr>
          <td className={styles.tTitle}>Name</td>
          <td className={styles.tTitle}>User Id</td>
          <td className={styles.tTitle}>Birth</td>
          <td className={styles.tTitle}>Gender</td>
          <td className={styles.tTitle}>Post Code</td>
          <td className={styles.tTitle}>IP</td>
          <td className={styles.tTitle}>Email</td>
          <td className={styles.tTitle}>Phone</td>
          <td className={styles.tTitle}>Status</td>
        </tr>
        {data && data?.map((data, index) => (
          <>
            <tr key={index}>
              <td className={styles.tData}>{data?.name}</td>
              <td className={styles.tData}>{data?.key_id}</td>
              <td className={styles.tData}>{data?.birth}</td>
              <td className={styles.tData}>{data?.gender}</td>
              <td className={styles.tData}>{data?.postcode}</td>
              <td className={styles.tData}>{data?.postcode}</td>
              <td className={styles.tData}>{data?.email}</td>
              <td className={styles.tData}>{data?.phone}</td>
              <td className={styles.tData}>{data?.status}</td>
            </tr>
          </>
        ))}
        </tbody>
      </table>
    
    </>
  )
}

export default NameTable;