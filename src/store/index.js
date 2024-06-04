import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import activeUserSlice from "./slices/activeUserSlice";

import isAuthSlice from "./slices/isAuthSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  activeUser: activeUserSlice,
  isAuth: isAuthSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Экспортируем store и persistor для использования в приложении
export default store;
