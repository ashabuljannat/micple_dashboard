// import { useLocation } from "react-router-dom";
// import { DataContext } from "../Filter/InputName";
import styles from "../Table/NameTable.module.css";

const ShowData = ({ user }) => {
  // const location = useLocation();
  // const user = location.state;
  // console.log(user);

  // const data  = useContext(DataContext);
  // console.log("context",data);

  return (
    <>
      <table style={{marginLeft:'20px'}}>
        <tbody>
          <tr>
            <td className={styles.tTitleN}>Name</td>
            <td className={styles.tTitle}>User Id</td>
            <td className={styles.tTitle}>Birth</td>
            <td className={styles.tTitle}>Country</td>
            <td className={styles.tTitle}>State</td>
            <td className={styles.tTitle}>City</td>
            <td className={styles.tTitle}>Gender</td>
            <td className={styles.tTitle}>Post Code</td>
            <td className={styles.tTitle}>IP</td>
            <td className={styles.tTitle}>Email</td>
            <td className={styles.tTitle}>Phone</td>
            <td className={styles.tTitle}>Status</td>
          </tr>
          <tr>
            <td className={styles.tData}>{user?.name}</td>
            <td className={styles.tData}>{user?.key_id}</td>
            <td className={styles.tData}>{user?.birth}</td>
            <td className={styles.tData}>{user?.country}</td>
            <td className={styles.tData}>{user?.state}</td>
            <td className={styles.tData}>{user?.city}</td>
            <td className={styles.tData}>{user?.gender}</td>
            <td className={styles.tData}>{user?.postcode}</td>
            <td className={styles.tData}>{user?.postcode}</td>
            <td className={styles.tData}>{user?.email}</td>
            <td className={styles.tData}>{user?.phone}</td>
            <td className={styles.tData}>{user?.status}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ShowData;
