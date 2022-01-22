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
      state.chosenRecipe = undefined;
      state.chosenRecipeTitle = undefined;
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
      if (action.payload.data.id !== state.chosenRecipeLoading) {
        state.chosenRecipeLoading = action.payload.data.id;
        state.chosenRecipe = action.payload.data;
        state.chosenRecipeLoading = 'fulfilled';
      }
    });
  },
});

export const { setRecipeTitle, resetChosenRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
