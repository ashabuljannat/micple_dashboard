import React, { createContext} from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { AllUserData } from "./Context/UserContext";


export const UserContext = createContext();
 
function App() {
  const allUserData = AllUserData();


  return (
    <>
      <UserContext.Provider value={allUserData}>
        <RouterProvider router={router} />
      </UserContext.Provider>
      
    </>
  );
}

export default App;
