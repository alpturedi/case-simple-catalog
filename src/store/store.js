import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { productApi } from './services/productApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['nothing'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, productApi.middleware],
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };
