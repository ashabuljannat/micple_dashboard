import React, { useState } from "react";
import { AllUserData } from "../../Context/UserContext";
import styles from "./InputBirth.module.css";

const InputBirth = () => {
  const all = AllUserData();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    // console.log(searchText);
    const filteredData = all.name.filter((item) => {
      // console.log(item)
      return item.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(filteredData);
    setSearchResults(filteredData);
  };
  return (
    <>
      <div>
        <input
          type="text"
          name=""
          id=""
          className={styles.search}
          value={searchText}
          onChange={handleSearch}
          placeholder="Search by Birth..."
        />
        <div>
          {searchResults.map((item) => (
            <div key={item.id}>
              <p>Name: {item}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InputBirth;
