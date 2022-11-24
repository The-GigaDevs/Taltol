import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authService from "../services/auth.service";
import collectionService from "../services/collection.service";
const { allUsers } = authService;
const {  getCollections} = collectionService;
const initialState = {
  allUsers: [],
  selectedUser: null,
  selectedUserLiked: null,
    selectedUserSavedCollection: null,
};

export const getAllUsers = createAsyncThunk("admin/getAllUsers", () => {
  const result = toast.promise(allUsers(), {
    success: "Users fetched!",
    pending: "Getting all users...",
    error: "Unable to get users.",
  });
  return result;
});

export const selectedUser = createAsyncThunk("admin/selectedUser", (user) => {
  return user;
});

export const getCollectionsAction = createAsyncThunk(
    "admin/getCollections",
    () => {
        const result = toast.promise(getCollections(), {
            success: "Collections fetched!",
            pending: "Getting all collections...",
            error: "Unable to get collections.",
        });
        return result;
    }
);

        

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.allUsers = [];
    },
    [selectedUser.fulfilled]: (state, action) => {
      state.selectedUser = action.payload;
    },
    [getCollectionsAction.fulfilled]: (state, action) => {
        state.selectedUserSavedCollection = action.payload;
    }
  },
});

export default adminSlice.reducer;
