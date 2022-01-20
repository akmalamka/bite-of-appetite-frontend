import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import api from 'utils/api';

export const fetchRecipeList = createAsyncThunk(
  'recipes/fetchRecipeList',
  async (thunkAPI) => {
    const response = await api.get('/recipes');
    return response.data;
  },
);

export const fetchRecipeById = createAsyncThunk(
  'recipes/fetchRecipeById',
  async (recipeId, thunkAPI) => {
    const response = await api.get(`/recipes/${recipeId}`);
    return response.data;
  },
);

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    chosenRecipe: [],
    recipeList: [],
    recipeTitle: '',
  },

  reducers: {
    setRecipeTitle: (state, action) => {
      state.recipeTitle = action.payload;
      console.log(current(state));
    },
    // setChosenRecipe: (state, action) => {
    //   //   const increment = action.payload || 1;
    //   //   state.count += increment;
    //   state.chosenRecipe = action.payload;
    //   state.recipeTitle = action.payload.title;
    //   // return {
    //   //   ...state,
    //   //   chosenRecipe: action.payload,
    //   //   recipeTitle: action.payload.title,
    //   // };
    // },
    resetChosenRecipe: (state) => {
      //   const decrement = action.payload || 1;
      //   state.count -= decrement;
      state.chosenRecipe = undefined;
      state.recipeTitle = undefined;
    },
    // setRecipeList: (state, action) => {
    //   //   const decrement = action.payload || 1;
    //   //   state.count -= decrement;
    //   state.recipeList = action.payload;
    //   // return {
    //   //   ...state,
    //   //   recipeList: action.payload,
    //   // };
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchRecipeList.fulfilled, (state, action) => {
      // Add user to the state array
      state.recipeList = action.payload.data;
      console.log('abccc');
      console.log(current(state));
    });
    builder.addCase(fetchRecipeById.fulfilled, (state, action) => {
      // Add user to the state array
      state.chosenRecipe = action.payload.data;
    });
  },
});

export const {
  setRecipeTitle,
  // setChosenRecipe,
  resetChosenRecipe,
  // setRecipeList,
} = recipeSlice.actions;
export default recipeSlice.reducer;
