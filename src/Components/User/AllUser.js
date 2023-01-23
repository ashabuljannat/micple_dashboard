import React, { useEffect, useState } from "react";
import styles from "./User.module.css";
import Review from "./Review";
import {
  AllUserData,
  Approved,
  Banned,
  Rejected,
  UnderReview,
  Verified,
} from "../../Context/UserContext";
import InputName from "../Filter/InputName";
import InputBirth from "../Filter/InputBirth";

const AllUser = () => {
  const review = UnderReview();
  const approved = Approved();
  const banned = Banned();
  const rejected = Rejected();
  const verified = Verified();
  const all = AllUserData();

  const [toggleState, setToggleState] = useState(1);
  const [ip, setIp] = useState("");
  const [address, setAddress] = useState({});

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    fetch("http://api.ipify.org")
      .then((response) => response.text())
      .then((ip) => setIp(ip));
  }, []);

  // console.log(review);
  return (
    <div className={styles.user}>
      <div className={styles.sidebar}></div>
      <div className={styles.menu}>
        <div className={styles.tableNav}>
          <div className={styles.nav}>
            <div className={styles.navItem}>
              <span
                className={toggleState === 1 && styles.active_tabs}
                onClick={() => toggleTab(1)}
              >
                Under Review ({review?.length})
              </span>
            </div>
            <div className={styles.navItem}>
              <span
                className={toggleState === 2 && styles.active_tabs}
                onClick={() => toggleTab(2)}
              >
                Approved ({approved?.length})
              </span>
            </div>
            <div className={styles.navItem}>
              <span
                className={toggleState === 3 && styles.active_tabs}
                onClick={() => toggleTab(3)}
              >
                Verified ({verified?.length})
              </span>
            </div>
            <div className={styles.navItem}>
              <span
                className={toggleState === 4 && styles.active_tabs}
                onClick={() => toggleTab(4)}
              >
                Rejected ({rejected?.length})
              </span>
            </div>
            <div className={styles.navItem}>
              <span
                className={toggleState === 5 && styles.active_tabs}
                onClick={() => toggleTab(5)}
              >
                Banned ({banned?.length})
              </span>
            </div>
            <div className={styles.navItem}>
              <span
                className={toggleState === 6 && styles.active_tabs}
                onClick={() => toggleTab(6)}
              >
                All ({all?.length})
              </span>
            </div>
          </div>
          <div className={styles.searchFilter}>
            <InputName />
            <InputBirth />
          </div> 
        </div>
        <div className={styles.content}>
          <span className={toggleState === 1 && styles.active_content}>
            {review && <Review allCountryUser={review} />}
          </span>
          <span className={toggleState === 2 && styles.active_content}>
            {approved && <Review allCountryUser={approved} />}
          </span>
          <span className={toggleState === 3 && styles.active_content}>
            {verified && <Review allCountryUser={verified} />}
          </span>
          <span className={toggleState === 4 && styles.active_content}>
            {rejected && <Review allCountryUser={rejected} />}
          </span>
          <span className={toggleState === 5 && styles.active_content}>
            {banned && <Review allCountryUser={banned} />}
          </span>
          <span className={toggleState === 6 && styles.active_content}>
            {all && <Review allCountryUser={all} />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
