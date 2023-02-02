import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    deleteUser(state, action) {},
    deleteAllUsers(state, action) {},
  },
});
export default userSlice.reducer;

export const { addUser, deleteUser, deleteAllUsers } = userSlice.actions;
