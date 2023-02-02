import React, { useState } from "react";
import TableColumn from "./TableColumn";
import styles from "./FullColumn.module.css";
import NameTable from "./NameTable";
import { BiReset } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

export const FullColumn = ({
  name,
  country,
  state,
  setState,
  city,
  setCity,
  user,
  setUser,
  filterState,
  filterCity,
  filterUser,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(false);

  let intervalId;
  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
    intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(intervalId);
          setIsLoading(false);
          setState(false);
          setCity(false);
          setUser(false);
          return 0;
        }
        return prevProgress + 10;
      });
    }, 1000);
  };

  const cancelLoading = () => {
    clearInterval(intervalId);
    setIsLoading(false);
    setProgress(true);
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th className={styles.taTitle}>
              {name}
              <div style={{ marginLeft: "5px" }}>
                {name === "Country" && isLoading ? (
                  <div className={styles.loaderContainer}>
                    <svg viewBox="0 0 36 36">
                      <path
                        className={styles.progressBg}
                        d="M 18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className={styles.progressBar}
                        strokeDasharray={`${progress}, 100`}
                        d="M 18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <MdOutlineCancel
                      onClick={cancelLoading}
                      className={styles.cancelButton}
                    />
                  </div>
                ) : (
                  name === "Country" && (
                    <BiReset className={styles.reset} onClick={startLoading} />
                  )
                )}
              </div>
            </th>
          </tr>
          <tr>
            <TableColumn data={country} filterState={filterState} />
          </tr>
          <tr>
            {state && <TableColumn data={state} filterCity={filterCity} />}
          </tr>
          <tr>{city && <TableColumn data={city} filterUser={filterUser} />}</tr>
          <tr>{user && <NameTable user={user} />}</tr>
        </tbody>
      </table>
    </>
  );
};
