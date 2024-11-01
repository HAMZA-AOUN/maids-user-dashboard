import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, fetchUserById } from "../services/userService";
import nProgress from "nprogress";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

interface UserState {
  users: User[];
  user: User | null;
  loading: boolean;
  error: Error | null;
  page: string;
  totalUsers: number;
  totalPages: number;
  perPage: number;
}

const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: null,
  page: "1",
  totalUsers: 0,
  totalPages: 0,
  perPage: 0,
};

export const fetchUsersThunk = createAsyncThunk(
  "user/fetchUsers",
  async (page: string, { rejectWithValue }) => {
    try {
      nProgress.start();

      const data = await fetchUsers(page);
      nProgress.done();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchUserByIdThunk = createAsyncThunk(
  "user/fetchUserById",
  async (id: string, { rejectWithValue }) => {
    try {
      nProgress.start();
      const data = await fetchUserById(id);
      nProgress.done();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        state.totalPages = action.payload.total_pages;
        state.totalUsers = action.payload.total;
        state.perPage = action.payload.per_page;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as Error;
      })
      .addCase(fetchUserByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
      })
      .addCase(fetchUserByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as Error;
      });
  },
});

export const { setPage, clearUser } = userSlice.actions;
export default userSlice.reducer;
