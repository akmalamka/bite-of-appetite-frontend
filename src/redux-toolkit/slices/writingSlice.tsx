import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from 'utils/api';

export const fetchWritingList = createAsyncThunk(
  'writings/fetchWritingList',
  async () => {
    const response = await api.get('/writings');
    return response.data;
  },
);

export const fetchWritingById = createAsyncThunk(
  'writings/fetchWritingById',
  async (writingId: number) => {
    const response = await api.get(`/writings/${writingId}`);
    return response.data;
  },
);

export const fetchWritingByName = createAsyncThunk(
  'writings/fetchWritingByName',
  async (writingName: string) => {
    const response = await api.get(`/writings/${writingName}`);
    return response.data;
  },
);

export const writingSlice = createSlice({
  name: 'writings',
  initialState: {
    chosenWriting: [],
    chosenWritingId: 0,
    writingList: [],
    writingListLoading: 'idle',
    chosenWritingLoading: 'idle',
    chosenWritingTitle: '',
  },

  reducers: {
    resetChosenWriting: (state) => {
      return {
        ...state,
        chosenWriting: undefined,
        chosenWritingTitle: undefined,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWritingList.pending, (state) => {
      if (state.writingListLoading === 'idle') {
        state.writingListLoading = 'pending';
      }
    });
    builder.addCase(fetchWritingByName.pending, (state) => {
      if (state.chosenWritingLoading === 'idle') {
        state.chosenWritingLoading = 'pending';
      }
    });
    builder.addCase(fetchWritingList.fulfilled, (state, action) => {
      state.writingList = action.payload.data;
      state.writingListLoading = 'fulfilled';
    });
    builder.addCase(fetchWritingById.fulfilled, (state, action) => {
      state.chosenWriting = action.payload.data;
    });
    builder.addCase(fetchWritingByName.fulfilled, (state, action) => {
      if (action.payload.data.id !== state.chosenWritingId) {
        state.chosenWritingId = action.payload.data.id;
        state.chosenWriting = action.payload.data;
        state.chosenWritingLoading = 'fulfilled';
      }
    });
  },
});
export const selectAllWritings = (state) => state.writing.writingList;

export const selectChosenWriting = (state) => state.writing.chosenWriting;

export const selectChosenWritingLoading = (state) =>
  state.writing.chosenWritingLoading;

export const selectChosenWritingTitle = (state) =>
  state.writing.chosenWritingTitle;

export const selectWritingListLoading = (state) =>
  state.writing.writingListLoading;

export const { resetChosenWriting } = writingSlice.actions;
export default writingSlice.reducer;
