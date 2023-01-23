import React, { useState } from "react";
import "./X.css";
import { MdOutlineCancel } from "react-icons/md";

const X = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(false);
  const [first, setFirst] = useState(false);
  const [first1, setFirst1] = useState([22, 23, 24, 25, 26]);

  let intervalId;
  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
    intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(intervalId);
          setIsLoading(false);
          setFirst([]);
          setFirst1([]);
          return 0;
        }
        return prevProgress + 10;
      });
    }, 1000);
  };

  const cancelLoading = () => {
    clearInterval(intervalId);
    setIsLoading(false);
    setProgress(true);
  };

  const names = [
    'akram',
    'Aktar',
    'bibek',
    'Bikal',
    'camil',
    'Cumilla',
    'david',
    'Danial',
    'emil',
    'Elli',
  ];

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    // console.log(searchText);
    const filteredData = names.filter(item => {
      // console.log(item)
      return item.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(filteredData);
    setSearchResults(filteredData); 
     
  }
  

  return (
    <>
      <div>
        {isLoading ? (
          <div className="loader-container">
            <svg viewBox="0 0 36 36">
              <path
                className="progress-bg"
                d="M 18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="progress-bar"
                strokeDasharray={`${progress}, 100`}
                d="M 18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>

            <MdOutlineCancel
              onClick={cancelLoading}
              color="red"
              className="cancel-button"
            />
          </div> 
        ) : (
          <button className="start-button" onClick={startLoading}>
            Start
          </button>
        )}
      </div>

      <div>
        <input type="text" value={searchText} onChange={handleSearch} placeholder="Search by name..."/>
      <div>
        {searchResults.map(item => (
          <div key={item.id}>
            <p>Name: {item}</p>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default X;
