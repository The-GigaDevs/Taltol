import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import authService from '../services/auth.service.js'
import collectionService from "../services/collection.service";

const { allUsers, getDropdownOptions, saveDropdownOptions } = authService;
const { getCollections } = collectionService;

const initialState = {
  allUsers: [],
  dropdown: [],
  selectedUser: null,
  selectedUserLiked: null,
  selectedUserSavedCollection: null,
}

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
)

export const fetchDropdownOptions = createAsyncThunk(
    'admin/dropdown',
    async () => {
        const result = await getDropdownOptions();
        return result;
    }
)

export const editDropdownOptions = createAsyncThunk(
    'admin/editDropdown',
    (data) => {
        const result = toast.promise(
            saveDropdownOptions(data),
            {
                success: 'Dynamic dropdown options changed!',
                pending: 'Changing dropdown options...',
                error: 'Error!!! Cannot change dropdown opions.'
            }
            )
        return result;
    }
)
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
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.allUsers = [];
    },
    [fetchDropdownOptions.fulfilled]: (state, action) => {
      delete action.payload['id']
      state.dropdown = action.payload;
    },
    [fetchDropdownOptions.rejected]: (state, action) => {
      state.dropdown = [];
    },
    [editDropdownOptions.fulfilled]: (state, action) => {
      state.dropdown = action.payload;
    },
    [editDropdownOptions.rejected]: (state, action) => {
      state.dropdown = null;
    },
  },
});

export default adminSlice.reducer;
