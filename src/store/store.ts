import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/userApi";
import { movieApi } from "./services/movieApi";
import userReducer from "./slices/userSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { roomApi } from "./services/roomApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "token", "role"],
}

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
      [userApi.reducerPath]: userApi.reducer,
      [movieApi.reducerPath]: movieApi.reducer,
      [roomApi.reducerPath]: roomApi.reducer,
      user: persistedReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userApi.middleware,movieApi.middleware,roomApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
