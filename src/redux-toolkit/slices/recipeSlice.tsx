import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import api from 'utils/api';

export const fetchRecipeList = createAsyncThunk(
  'recipes/fetchRecipeList',
  async () => {
    const response = await api.get('/recipes');
    return response.data;
  },
);

export const fetchRecipeById = createAsyncThunk(
  'recipes/fetchRecipeById',
  async (recipeId) => {
    const response = await api.get(`/recipes/${recipeId}`);
    return response.data;
  },
);

export const fetchRecipeByName = createAsyncThunk(
  'recipes/fetchRecipeByName',
  async (recipeName: string) => {
    const response = await api.get(`/recipes/${recipeName}`);
    return response.data;
  },
);

export const deleteRecipeById = createAsyncThunk(
  'recipes/deleteRecipeById',
  async (recipeId) => {
    const response = await api.delete(`/recipes/${recipeId}`);
    return response.data;
  },
);
export const deleteRecipeByIdImage = createAsyncThunk(
  'recipes/deleteRecipeByIdImage',
  async (recipeId) => {
    const response = await api.delete(`/recipes/${recipeId}/image`);
    return response.data;
  },
);

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    chosenRecipe: [],
    chosenRecipeId: 0,
    recipeList: [],
    recipeListLoading: 'idle',
    chosenRecipeLoading: 'idle',
    chosenRecipeTitle: '',
  },

  reducers: {
    setRecipeTitle: (state, action) => {
      state.chosenRecipeTitle = action.payload;
    },
    resetChosenRecipe: (state) => {
      state.chosenRecipe = [];
      state.chosenRecipeTitle = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipeList.pending, (state) => {
      if (state.recipeListLoading === 'idle') {
        state.recipeListLoading = 'pending';
      }
    });
    builder.addCase(fetchRecipeByName.pending, (state) => {
      if (state.chosenRecipeLoading === 'idle') {
        state.chosenRecipeLoading = 'pending';
      }
    });
    builder.addCase(fetchRecipeList.fulfilled, (state, action) => {
      state.recipeList = action.payload.data;
      state.recipeListLoading = 'fulfilled';
    });
    builder.addCase(fetchRecipeById.fulfilled, (state, action) => {
      state.chosenRecipe = action.payload.data;
    });
    builder.addCase(fetchRecipeByName.fulfilled, (state, action) => {
      if (action.payload.data.id !== state.chosenRecipeId) {
        state.chosenRecipeId = action.payload.data.id;
        state.chosenRecipe = action.payload.data;
        state.chosenRecipeLoading = 'fulfilled';
      }
    });
  },
});

export const selectAllRecipes = (state) => state.recipe.recipeList;

export const selectChosenRecipe = (state) => state.recipe.chosenRecipe;

export const selectChosenRecipeLoading = (state) =>
  state.recipe.chosenRecipeLoading;

export const selectChosenRecipeTitle = (state) =>
  state.recipe.chosenRecipeTitle;

export const selectRecipeListLoading = (state) =>
  state.recipe.recipeListLoading;

export const { setRecipeTitle, resetChosenRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
