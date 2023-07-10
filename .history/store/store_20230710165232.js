import { createStore } from "redux";

const persistConfig = {
  key: "4",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, wordsReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
