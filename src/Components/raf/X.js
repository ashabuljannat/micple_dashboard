import React, { useState } from "react";
import "./X.css";
import { MdOutlineCancel } from "react-icons/md";
import Input from "../Filter/Input";

// import styles from "./X.module.css";

const X = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [progress, setProgress] = useState(0);
  const [first, setFirst] = useState([11, 12, 13, 14, 15]);
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
          return 0;
        }
        return prevProgress + 10;
      });
    }, 1000);
  };

  const cancelLoading = () => {
    clearInterval(intervalId);
    setIsLoading(false);
    setProgress(0);
  };

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



      <div className="">
        {first.map((a) => (
          <div className="">{a}</div>
        ))}
        <br />
        {first1.map((a) => (
          <div className="">{a}</div>
        ))}
      </div>
      <div className="" style={{ display: "flex", flexDirection: "row" }}>
        <Input />

        <Input />
        <Input />
        <Input />
      </div>
    </>
  );
};

export default X;
