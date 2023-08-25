import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },

    clearFilter: state => {
      state.value = '';
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
