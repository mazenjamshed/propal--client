import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    checked: false,
  },
  reducers: {
    toggle(state) {
      state.checked = !state.checked;
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
