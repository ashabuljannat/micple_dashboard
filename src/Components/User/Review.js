import React, { useEffect, useState } from "react";
import { count_data } from "../../Context/Budge";
import { FullColumn } from "../Table/FullColumn";
import NameTable from "../Table/NameTable";
import styles from "./User.module.css";

const Review = ({ allCountryUser }) => {
  const [uniCountry, setUniCountry] = useState([]);
  const [state, setState] = useState(false);
  const [city, setCity] = useState(false);
  const [user, setUser] = useState([]);

  // console.log(allCountryUser)

  useEffect(() => {
    if (allCountryUser) {
      const all = allCountryUser?.map((user) => user.country);
      // console.log(all)
      const res = count_data(all);
      // console.log(res);
      setUniCountry(res);
    }
  }, []);
  // console.log(uniCountry);

  const filterState = (e) => {
    const filter = allCountryUser?.filter((item) => item.country === e);
    // console.log('state FF',filter)
    const all = filter.map((user) => user.state);
    const res = count_data(all);
    // console.log(res);
    setState(res);
    setCity(false);
    setUser(false);
  };

  const filterCity = (e) => {
    const filter = allCountryUser?.filter((item) => item.state === e);
    // console.log('city FF',filter)
    const all = filter.map((user) => user.city);
    const res = count_data(all);
    // console.log(res);
    setCity(res);
    setUser(false);
  };

  const filterUser = (e) => {
    const filter = allCountryUser?.filter((item) => item.city === e);
    setUser(filter);
  };

  return (
    <>
      <div className={styles.user}>
        <div className={styles.sidebar}></div>
        <div className={styles.menu}>
          <div className={styles.content}>
            <>
              <div className={styles.filCity}>
                {/* <h2>Under Review Users : {allCountryUser?.length}</h2> */}
           
              </div>
              <div className={styles.fTable}>
                <FullColumn
                  name={"All Country"}
                  country={uniCountry}
                  filterState={filterState}
                />
                <FullColumn
                  name={"State"}
                  state={state}
                  filterCity={filterCity}
                />
                <FullColumn name={"City"} city={city} filterUser={filterUser} />
                <NameTable data={user} />
              </div>
            </>
          </div>
          </div>   
      </div>
    </>
  );
};

export default Review;
