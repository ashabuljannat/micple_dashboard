import React from "react";
import TableColumn from "./TableColumn";
import styles from "./FullColumn.module.css";
import Input from "../Filter/Input";
import NameTable from "./NameTable";


export const FullColumn = ({
  name,
  country,
  state,
  city,
  user,
  filterState,
  filterCity,
  filterUser, 
}) => {
  // console.log('user2nd',country);
  return (
    <>
      <table className={styles.table2}>
        <tbody>
          <tr> 
            <th>{name}</th>
          </tr>
          {/* <tr>
            <th>
              <Input />
            </th>
          </tr> */}
          <tr>
          <TableColumn data={country} filterState={filterState} />
          </tr>
          <tr>
            {state && <TableColumn data={state} filterCity={filterCity} />}
          </tr>
          <tr>{city && <TableColumn data={city} filterUser={filterUser} />}</tr>
          <tr>{user && <NameTable name={user} />}</tr>
        </tbody>
      </table>
    </>
  );
};
