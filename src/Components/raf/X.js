import React, { useEffect, useState } from "react";
import "./X.css";
import { MdOutlineCancel } from "react-icons/md";

const X = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(false);
  const [first, setFirst] = useState(false);

  useEffect(() => {
    fetch("/rakib.json")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        // const inti = json.filter(
        //   (person) => person.status === "verified"
        // );
        setFirst(json);
      });
  }, []);
  const names = [
    "akram",
    "Aktar",
    "bibek",
    "Bikal",
    "camil",
    "Cumilla",
    "david",
    "Danial",
    "emil",
    "Elli",
  ];

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState();

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(searchText);
    first.map((country) => {
      country.state.map((state) => {
        state.city.map((city) => {
          const filteredData = city.user_report.find(
            (report) => report.user_id === searchText
          );
          // console.log(filteredData);

          
          if (filteredData) {
            setSearchResults(filteredData);
          // console.log(searchResults);
          }
          // console.log(filteredData);
        });
      });
    });
  };

  // const handleSearch = (e) => {
  //   // e.preventDefault();
  //   console.log(e.target.value);
  //   setSearchText(e.target.value);
  //   console.log(searchText);
  //   first.map((item) => {
  //     item.state.map((state) => {
  //       state.city.map((city) => {
  //         const filteredData = city.user_report.filter(
  //           (report) => report.user_id === searchText
  //         );
  //         console.log(filteredData);

  //         setSearchResults(filteredData);
  //         if (!filteredData.length === 0) {
  //           console.log(searchResults);
  //         }
  //       });
  //     });
  //     // return item.toLowerCase().includes(searchText.toLowerCase());
  //   });
  //   // console.log(filteredData);
  //   // setSearchResults(filteredData);
  // };
  console.log(searchResults);
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search by name..."
          />
          <button type="submit">Search</button>
        </form>

        <div>
          {searchResults &&
            searchResults?.reports.map((item) => (
              <div key={item.id}>
                <p>Name: {item.report_sub}</p>
              </div>
            ))}
            {
              searchResults?.user_id
            }
        </div>
      </div>
    </>
  );
};

export default X;
