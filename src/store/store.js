import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { default as categories } from './categories/categories';
import { default as products } from './products/products';

const rootReducer = combineReducers({
  categories,
  products,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['nothing'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
