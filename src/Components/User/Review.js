import React, { useEffect, useState } from "react";
import { count_data } from "../../Context/Budge";
import { FullColumn } from "../Table/FullColumn";
import NameTable from "../Table/NameTable";
import styles from "./User.module.css";
import InputName from "../Filter/InputName";
import InputBirth from "../Filter/InputBirth";
import ShowData from "./ShowData";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Review = ({ allCountryUser }) => {
  const [uniCountry, setUniCountry] = useState([]);
  const [state, setState] = useState(false);
  const [city, setCity] = useState(false);
  const [user, setUser] = useState([]);
  // console.log(allCountryUser)
  const [searchName, setSearchName] = useState("");
  const [searchNameResults, setSearchNameResults] = useState(false);
  const [searchDate, setSearchDate] = useState("");
  const [searchDateResults, setSearchDateResults] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (allCountryUser) {
      const all = allCountryUser?.map((user) => user.country);
      // console.log(all)
      const res = count_data(all);
      // console.log(res);
      setUniCountry(res);
    }
  }, []);

  const handleNameSearch = (e) => {
    setSearchName(e.target.value);
    if (allCountryUser) {
      const filteredData = allCountryUser?.filter((item) => {
        return item.name.toLowerCase().includes(searchName.toLowerCase());
      });
      setSearchNameResults(filteredData);
    }
    if (e.target.value === "") {
      setSearchNameResults(false);
      setShowData(false);
    }
  };

  const handleDateSearch = (event) => {
    if (event.target.value === "") {
      setSearchDateResults(false);
      setShowData(false);
    }
    const input = event.target;
    const date = new Date(input.value);
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    setSearchDate(month + "/" + day + "/" + year);
    // console.log('func',dateS);
    if (allCountryUser) {
      const filteredData = allCountryUser?.filter((item) => {
        return item.birth == searchDate;
      });
      console.log(filteredData);
      setSearchDateResults(filteredData);
    }
  };

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
      <div className={styles.searchFilter}>
        <div>
          <div className={styles.searchField}>
            <input
              type="text"
              name=""
              id=""
              className={styles.search}
              value={searchName}
              onChange={handleNameSearch}
              placeholder="Search by Name..."
            />
            <BiSearch className={styles.searchBtn} />
          </div>
          <div className={styles.data}>
            {searchNameResults &&
              searchNameResults?.map((item, index) => (
                <div
                  key={index}
                  className={styles.searchD}
                  onClick={() => setShowData(item)}
                >
                  <p>Name : {item.name}</p>
                  <p className={styles.searchPt}>Birth : {item.birth}</p>
                  <p className={styles.searchPt}>Country : {item.country}</p>
                </div>
              ))}
          </div>
        </div>
        <div>
          <div className={styles.searchField}>
            <input
              type="date"
              className={styles.search}
              onChange={handleDateSearch}
            />
          </div>
          <div className={styles.data}>
            {searchDateResults &&
              searchDateResults?.map((item, index) => (
                <div
                  key={index}
                  className={styles.searchD}
                  onClick={() => setShowData(item)}
                >
                  <p>Name : {item.name}</p>
                  <p className={styles.searchPt}>Birth : {item.birth}</p>
                  <p className={styles.searchPt}>Country : {item.country}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      { showData &&  <ShowData user={showData} /> }
     
      <div className={styles.user}>
        <div className={styles.sidebar}></div>
        <div className={styles.menu}>
          <div className={styles.content}>
            <>
              <div className={styles.fTable}>
                <FullColumn
                  name={"Country"}
                  country={uniCountry}
                  setState={setState}
                  setCity={setCity}
                  setUser={setUser}
                  filterState={filterState}
                />
                <FullColumn
                  name={"State"}
                  state={state}
                  filterCity={filterCity}
                />
                <FullColumn name={"City"} city={city} filterUser={filterUser} />
                <NameTable user={user} />
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
