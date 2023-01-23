import React, { useState } from "react";
import { AllUserData } from "../../Context/UserContext";
import styles from "./InputBirth.module.css";
import { BiSearch } from "react-icons/bi";



const InputName = () => {
  const all = AllUserData();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // console.log(all);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
    if (all) {
      const filteredData = all?.filter((item) => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      });
      // console.log(filteredData);
      setSearchResults(filteredData);
      // });
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
        <div>
          {searchResults.map((item) => (
            <div key={item.id} className={styles.data}>
              <p>Name: {item.name}</p>
              <p>Birth: {item.birth}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InputName;
