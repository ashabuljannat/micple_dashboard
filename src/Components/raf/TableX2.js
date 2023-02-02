import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { count_data } from "../../Context/Budge";
import { AllUserData } from "../../Context/UserContext";
import store from "../../store/store";
import ActionButton from "../ActionButton/ActionButton";
import "./TableX2.css";

var initialState = [
  {
    gender: "male",
    name: {
      title: "Monsieur",
      first: "Andrea",
      last: "Durand",
    },
    city: "Corban",
    state: "Luzern",
    country: "Switzerland",
    picture: "https://randomuser.me/api/portraits/med/men/37.jpg",
    status: "yes",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Alma",
      last: "Cole",
    },
    city: "Pearland",
    state: "Georgia",
    country: "United States",
    picture: "https://randomuser.me/api/portraits/med/women/42.jpg",
    status: "no",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Alexandra",
      last: "Carr",
    },
    city: "Wells",
    state: "Shropshire",
    country: "United Kingdom",
    picture: "https://randomuser.me/api/portraits/med/women/34.jpg",
    status: "no",
  },
];
// var initialState = 0; 

const TableX = () => {
  const json = AllUserData();
  const [allCountry, setAllCountry] = useState([]);

  useEffect(() => {
    fetch("/user.json")
      .then((response) => response.json())
      .then((json) => {
        setAllCountry(json);
      });
  }, []);

  const reducer = (state, action) => {
    // console.log("func", state2, action);
    // console.log("func", action.conState);
    switch (action.type) {
      case "FilterState":
        return FilterState(action.country);
      case "FilterCity":
        return FilterCity(action.conState);
      case "FilterUser":
        return FilterUser(action.user);
      default:
        return state;
    }
  };

  const FilterState = (country) => {
    const filter = allCountry?.filter((item) => item.country === country);
    // console.log("state FF", filter);
    const allC = filter.map((user) => user.state);
    // console.log(all);
    const res = count_data(allC);
    // console.log(res);
    return res;
  };

  const FilterCity = (conState) => {
    // console.log(conState);
    const filter = allCountry?.filter((item) => item.state === conState);
    // console.log("state FF", filter);
    const allC = filter.map((user) => user.city);
    // console.log(all);
    const res = count_data(allC);
    // console.log(res);
    return res;
  };
  const FilterUser = (city) => {
    // console.log(conState);
    const filter = allCountry?.filter((item) => item.city === city);
    console.log("state FF", filter);
    // const allC = filter.map((user) => user.city);
    // console.log(allC);
    // const res = count_data(allC);
    // console.log(res);
    return filter;
  };

  const [state, dispatch] = useReducer(reducer, allCountry);
  // const [add1, setAdd1] = useState(0);
  // const [add4, setAdd4] = useState(0);
  // console.log("use", state);
  // console.log(CoState);
  // const add = () => {
  //   setAdd1(add1 + 1);
  // };
  // const add2 = () => {
  //   setAdd4(add4 + 2);
  // };

  return (
    <>
    <div style={{ display: "flex" }}>
      <div>
        {json?.map((item,index) => (
          <div
            style={{ height: "50px", width: "120px", backgroundColor: "aqua" }}
            onClick={() =>
              dispatch({ type: "FilterState", country: item.country })
            }
            key={index}
          >
            Country:{item.country}
          </div>
        ))}
      </div>
      <div>
        {state?.map((item) => (
          <div
            style={{
              height: "50px",
              width: "100px",
              backgroundColor: "aqua",
              display: "flex",
            }}
            onClick={() =>
              dispatch({ type: "FilterCity", conState: item.name })
            }
          >
            <h5>{item.name}</h5>
            <h5>{item.count}</h5>
          </div>
        ))}
      </div>
      <div>
        {state?.map((item) => (
          <div
            style={{
              height: "50px",
              width: "100px",
              backgroundColor: "aqua",
              display: "flex",
            }}
            onClick={() =>
              dispatch({ type: "FilterUser", user: item.name })
            }
          >
            <h5>{item.name}</h5>
            <h5>{item.email}</h5>
          </div>
        ))}
      </div>

      {/* <button onClick={() => dispatch({ type: "FilterState", name: "USA" })}>
        State
      </button>
      <button
        onClick={() => dispatch({ type: "FilterCountry", name: "bonani" })}
      >
        Country
      </button>
      <button onClick={() => dispatch({ type: "FilterCity" })}>City</button> */}
      {/* <select name="cars" id="cars">
        <option value="volvo" onClick={() => console.log("func")}>
          Volvo
        </option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <br />
      <br />
      <button onClick={add}>+ {add1}</button>
      <button onClick={add2}>- {add4}</button> */}
      <ActionButton/>
    </div>
    </>
  );
};

export default TableX;
