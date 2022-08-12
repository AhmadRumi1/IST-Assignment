import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./slices/products";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //   devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk], //intercepts and stops non-serializable values
});

export const persistor = persistStore(store);
