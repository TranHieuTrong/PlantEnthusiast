import {configureStore} from '@reduxjs/toolkit';
import registerReducer from '../reducers/RegisterSlice';
import loginReducer from '../reducers/LoginSlice';
import productHomeReducer from '../reducers/HomeScreenSlice';
import categoryReducer from '../reducers/CategorySlice';
import searchReducer from '../reducers/searchSlide';
import productReducer from '../reducers/ProductSlice';

export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    all: productHomeReducer,
    danhmuc: categoryReducer,
    search: searchReducer,
    product: productReducer,
  },
});
