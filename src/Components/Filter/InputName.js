import React, { useState } from "react";
import { AllUserData } from "../../Context/UserContext";
import styles from "./InputName.module.css";

const InputName = () => {
  const all = AllUserData();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // console.log(all);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    // console.log(searchText);
    if (all) {
      // all?.map((user) => {
      //   console.log(user)
      const filteredData = all?.filter((item) => {
        // console.log(item)
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      });
      console.log(filteredData);
      setSearchResults(filteredData);
      // });
    }
  };
  return (
    <>
      <div>
        <input
          value={searchText}
          onChange={handleSearch}
          placeholder="Search by name..."
          type="text"
          name=""
          id=""
          className={styles.search}
        />
        <div className={styles.filterData}>
          {searchResults?.map((item) => (
            <div key={item.id}>
              <p>Name : {item.name}</p>
              <p>Birth : {item.birth}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InputName;
