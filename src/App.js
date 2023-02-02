import React, { createContext } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { AllUserData } from "./Context/UserContext";
import { Provider } from "react-redux";
import store from "./slices";

export const UserContext = createContext();

function App() {
  const allUserData = AllUserData();

  return (
    <>
    {/* <Provider store={store}>
    </Provider> */}
      <UserContext.Provider value={allUserData}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
