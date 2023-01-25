import React, { useContext, useState } from "react";
import { AllUserData } from "../../Context/UserContext";
import styles from "./InputBirth.module.css";
import { BiSearch } from "react-icons/bi";  
import { Link } from "react-router-dom";
// import { DataContext } from "../../Context/DataContext";
import { createContext } from "react";

const InputName = () => {
  const all = AllUserData();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(false);
  // console.log(all);

 

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    if (all) {
      const filteredData = all?.filter((item) => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      });
      setSearchResults(filteredData);
    }
    if (e.target.value === "") {
      setSearchResults(false);
    }
  };



  return (
    <>
      <div>
        <div className={styles.searchField}>
          <input
            type="text"
            name=""
            id=""
            className={styles.search}
            value={searchText}
            onChange={handleSearch}
            placeholder="Search by Name..."
          />
          <BiSearch className={styles.searchBtn} />
        </div>
        <div className={styles.data}>
          {searchResults &&
            searchResults?.map((item, index) => (
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

export default InputName;




