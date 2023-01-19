import React from "react";
import styles from "./Filter.module.css";

const Filter = ({
  uniCountry,
  uniState,
  uniCity,
  uniUser,
  filterState, 
  colorFix,
  dis_none,
}) => {
  // console.log("uniCountry", uniState);
  return (
    <>
      <div className={styles.totalField} style={{ display: dis_none }}>
        <div className={styles.selectField}>
          <label htmlFor="standard-select">Country</label>
          <div className={styles.select}>
            <select
              id="standard-select" 
              onChange={(e) => {
                filterState(e.target.value);
                colorFix(e.target.value);
              }}
            >
          
              {uniCountry?.map((country, index) => {
                return (
                  <option key={index} value={country?.name}>
                    {country?.name} ({country?.count})
                  </option>
                );
              })}
            </select>
            <span className={styles.focus}></span>
          </div>
        </div>
        {uniState && (
          <div className={styles.selectField}>
            <label htmlFor="standard-select">State</label>
            <div className={styles.select}>
              <select
                id="standard-select"
                // onChange={(e) => filterCity(e.target.value)}
              >
                {uniState?.map((country, index) => {
                  return (
                    <option key={index} value={country?.name}>
                      {country?.name} ({country?.count})
                    </option>
                  );
                })}
              </select>
              <span className={styles.focus}></span>
            </div>
          </div>
        )}
        {uniCity && (
          <div className={styles.selectField}>
            <label htmlFor="standard-select">City</label>
            <div className={styles.select}>
              <select
                id="standard-select"
                // onChange={(e) => filterCity(e.target.value)}
              >
                {uniCity?.map((country, index) => {
                  return (
                    <option key={index} value={country?.country}>
                      {country?.name} ({country?.count})
                    </option>
                  );
                })}
              </select>
              <span className={styles.focus}></span>
            </div>
          </div>
        )}
        {uniUser && (
          <div className={styles.selectField}>
            <label htmlFor="standard-select">User</label>
            <div className={styles.select}>
              <select
                id="standard-select"
                // onChange={(e) => filterCity(e.target.value)}
              >
                {uniUser?.map((country, index) => {
                  return (
                    <option key={index} value={country?.country}>
                      {country?.name} ({country?.count})
                    </option>
                  );
                })}
              </select>
              <span className={styles.focus}></span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
