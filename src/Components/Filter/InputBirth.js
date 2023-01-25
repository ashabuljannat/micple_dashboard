import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AllUserData } from "../../Context/UserContext";
import styles from "./InputBirth.module.css";

const InputBirth = () => {
  const all = AllUserData();
  const [dateS, setDateS] = useState("");
  const [searchDateResults, setSearchDateResults] = useState();

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setSearchDateResults(false);
    }
    const input = event.target;
    const date = new Date(input.value);
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    setDateS(month + "/" + day + "/" + year);
    // console.log('func',dateS);
    if (all) {
      const filteredData = all?.filter((item) => {
        return item.birth == dateS;
      });
      console.log(filteredData);
      setSearchDateResults(filteredData);
    }
  };

  // console.log(dateS);
  return (
    <>
      <div>
        <div className={styles.searchField}>
          <input
            type="date"
            className={styles.search}
            onChange={handleSearch}
          />
        </div>
        <div className={styles.data}>
          {searchDateResults &&
            searchDateResults?.map((item, index) => (
              <div key={index} className={styles.searchD}>
                <p>
                  <Link state={item} to="/show" className={styles.searchP}>
                    Name : {item.name}
                  </Link>
                </p>
                <p className={styles.searchPt}>Birth : {item.birth}</p>
                <p className={styles.searchPt}>Country : {item.country}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default InputBirth;
