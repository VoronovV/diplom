import { createSlice } from "@reduxjs/toolkit";

// Начальное состояние
const initialState = {
  isAuth: false,
};

// Создаем слайс для состояния isAuth
const isAuthSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

// Экспортируем действия
export const { setIsAuth } = isAuthSlice.actions;

// Селектор для получения значения isAuth из состояния
export const selectIsAuth = (state) => state.isAuth.isAuth;

// Экспортируем редьюсер по умолчанию
export default isAuthSlice.reducer;
