import { Link } from "react-router-dom";
import styles from "./ShowData.module.css";

const ShowData = ({ user }) => {
  return (
    <>
      <div className={styles.tDiv}>
        <table className={styles.tDivTable}>
          <tbody>
            <tr>
              <td className={styles.tTitle2}>Name</td>
              <td className={styles.tTitle2}>User Id</td>
              <td className={styles.tTitle2}>Birth</td>
              <td className={styles.tTitle2}>Country</td>
              <td className={styles.tTitle2}>State</td>
              <td className={styles.tTitle2}>City</td>
              <td className={styles.tTitle2}>Gender</td>
              <td className={styles.tTitle2}>Post Code</td>
              <td className={styles.tTitle2}>IP</td>
              <td className={styles.tTitle2}>Email</td>
              <td className={styles.tTitle2}>Phone</td>
              <td className={styles.tTitle2}>Status</td>
            </tr>
            <tr>
              <td className={styles.tData2}>{user?.name}</td>
              <td className={styles.tData2}>{user?.key_id}</td>
              <td className={styles.tData2}>{user?.birth}</td>
              <td className={styles.tData2}>{user?.country}</td>
              <td className={styles.tData2}>{user?.state}</td>
              <td className={styles.tData2}>{user?.city}</td>
              <td className={styles.tData2}>{user?.gender}</td>
              <td className={styles.tData2}>{user?.postcode}</td>
              <td className={styles.tData2}>{user?.postcode}</td>
              <td className={styles.tData2}>{user?.email}</td>
              <td className={styles.tData2}>{user?.phone}</td>
              <td className={styles.tData2}>{user?.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Link state={user} to={"/download"}>
          <button
            style={{
              padding: "5px 15px",
              marginLeft: "40%",
            }}
            id={"pdfbtn"}
          >
            Download PDF
          </button>
        </Link>
      </div>
    </>
  );
};

export default ShowData;
