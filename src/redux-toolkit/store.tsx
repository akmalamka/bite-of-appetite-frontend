import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { recipeSlice } from './slices/recipeSlice';
import { writingSlice } from './slices/writingSlice';

const store = configureStore({
  reducer: {
    recipe: recipeSlice.reducer,
    writing: writingSlice.reducer,
  },
  devTools: true,
  middleware: [thunk],
});

export default store;
