import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'utils/api';

export const fetchWritingList = createAsyncThunk(
  'writings/fetchWritingList',
  async (thunkAPI) => {
    const response = await api.get('/writings');
    return response.data;
  },
);

export const fetchWritingById = createAsyncThunk(
  'writings/fetchWritingById',
  async (writingId, thunkAPI) => {
    const response = await api.get(`/writings/${writingId}`);
    return response.data;
  },
);
export const writingSlice = createSlice({
  name: 'writings',
  initialState: {
    chosenWriting: [],
    writingList: [],
    writingTitle: '',
  },

  reducers: {
    // setChosenWriting: (state, action) => {
    //   //   const increment = action.payload || 1;
    //   //   state.count += increment;
    //   return {
    //     ...state,
    //     chosenWriting: action.payload,
    //     writingTitle: action.payload.title,
    //   };
    // },
    resetChosenWriting: (state) => {
      //   const decrement = action.payload || 1;
      //   state.count -= decrement;
      return {
        ...state,
        chosenWriting: undefined,
        writingTitle: undefined,
      };
    },
    // setWritingList: (state, action) => {
    //   //   const decrement = action.payload || 1;
    //   //   state.count -= decrement;
    //   // state.recipeList = action.payload;
    //   return {
    //     ...state,
    //     writingList: action.payload,
    //   };
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchWritingList.fulfilled, (state, action) => {
      // Add user to the state array
      state.writingList = action.payload.data;
    });
    builder.addCase(fetchWritingById.fulfilled, (state, action) => {
      // Add user to the state array
      state.chosenWriting = action.payload.data;
    });
  },
});

export const {
  // setChosenWriting,
  resetChosenWriting,
  // setWritingList,
} = writingSlice.actions;
export default writingSlice.reducer;
