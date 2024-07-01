import { configureStore,combineReducers } from "@reduxjs/toolkit";
import itemReducer from "./items"
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const store = configureStore({
//     reducer:{
//         cart:itemReducer
//     }
// })

const rootReducer = combineReducers({
    cart:itemReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });

  export const persistor = persistStore(store);