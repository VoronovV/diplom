import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getUserAndLogin from "@/firebase/actions/getUserAndLogin";

// Асинхронное действие для получения пользователя по логину
export const fetchUserByLogin = createAsyncThunk(
  "activeUser/fetchByLogin",
  async ({ login, password }) => {
    const user = await getUserAndLogin(login, password);
    return user;
  }
);

// Начальное состояние
const initialState = {
  entity: undefined,
  loading: "idle",
};

// Создаем слайс для состояния activeUser
const activeUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {
    removeActiveUser(state) {
      state.entity = undefined;
    },
    setActiveUser(state, action) {
      state.entity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByLogin.fulfilled, (state, action) => {
      state.entity = action.payload;
    });
  },
});

// Селектор для получения активного пользователя из состояния
export const selectActiveUser = (state) => state.activeUser.entity;

// Экспортируем действия
export const { removeActiveUser, setActiveUser } = activeUserSlice.actions;

// Экспортируем редьюсер по умолчанию
export default activeUserSlice.reducer;
