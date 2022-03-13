import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    // toggled: false,
    signupForm: false,
  },
  reducers: {
    showSignup(state) {
      state.signupForm = true;
    },
    closeSignup(state) {
      state.signupForm = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
