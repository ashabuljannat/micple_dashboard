import React, { useState } from "react";
import "./TableColumn.css";

function TableColumn({ data, filterState ,filterCity,filterUser}) {
  // console.log('t col',data);
  const [clickedRow, setClickedRow] = useState(null);

  return ( 
    <>
      {data && data?.map((data, index) => (
        <div key={index} className={`t_c_Title ${clickedRow === index && "clicked"}`}>
          <div
            className={`t_c_Data`}
            onClick={() => {              
              setClickedRow(index);
              filterState && filterState(data.name);              
              filterCity && filterCity(data.name);
              filterUser && filterUser(data.name);
            }}
          >
            {data?.name} ({data?.count})
          </div>
        </div>
      ))}
    </> 
  );
}

export default TableColumn;
