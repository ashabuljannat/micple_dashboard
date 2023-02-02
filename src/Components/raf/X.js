import React, { useEffect, useState } from "react";
import "./X.css";
import { AllUserData } from "../../Context/UserContext";

const X = () => {
  const [first, setFirst] = useState(false);
  const all = AllUserData();

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
    // first.map((country) => { 
    //   country.state.map((state) => {
    //     state.city.map((city) => {
    //       const filteredData = city.user_report.find(
    //         (report) => report.user_id === searchText
    //       );
    //       // console.log(filteredData);

          
    //       if (filteredData) {
    //         setSearchResults(filteredData);
    //       // console.log(searchResults);
    //       }
    //       // console.log(filteredData);
    //     });
    //   });
    // });

    if (all) {
      const filteredData = all?.filter((item) => {
        return item.name.toLowerCase().includes(searchText.toLowerCase());
      });
      console.log(filteredData);
      setSearchResults(filteredData);
    }
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


  // console.log(searchResults);


  const [date, setDate] = useState("");

  const handleDateChange = (event) => {
      const input = event.target;
      const date = new Date(input.value);
      const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
      const day = date.getUTCDate().toString().padStart(2, '0');
      const year = date.getUTCFullYear();
      const formattedDate = month + "/" + day + "/" + year;
      setDate(formattedDate);
  }
  return (
    <>
       <div>
            <input type="date" onChange={handleDateChange} />
            <p>{date}</p>
        </div>
    </>
  );
};

export default X;
